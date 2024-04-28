import { NextResponse } from "next/server";
import connectToDatabase from "../../lib/db";
import Product from "../../lib/models/Product";
import Organisation from "../../lib/models/Organisation";
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;

// GET route to fetch all products of a particular organisation
export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const orgId = searchParams.get('orgId');

    console.log(orgId);

    if (!orgId) {
      return new NextResponse(JSON.stringify({ message: "orgId is required" }), { status: 400 });
    }

    if (!Types.ObjectId.isValid(orgId)) {
      return new NextResponse(JSON.stringify({
        message: "Invalid ID"
      }),
        {
          status: 400
        }
      )
    }

    await connectToDatabase();

   

    const products = await Product.find({ organisation: orgId });
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Error fetching products" ,error:error }), { status: 500 });
  }
};

// POST route to create a new product under a particular organisation
export const POST = async (req) => {
  try {
    const body = await req.json();
    await connectToDatabase();

    const newProduct = new Product(body);
    await newProduct.save();

    await Organisation.findByIdAndUpdate(
        body.organisation,
        { $push: { products: newProduct._id } },
        { new: true }
      );

    return new NextResponse(JSON.stringify(newProduct), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Error creating product",error:error }), { status: 500 });
  }
};

// PATCH route to update an existing product under a particular organisation
export const PATCH = async (req) => {
    try {
        const body = await req.json();
        const { productId, newProductName} = body;
        await connectToDatabase();
    
        if (!productId || !newProductName) {
          return new NextResponse(JSON.stringify({
            message: "ID or product name  required"
          }),
            {
              status: 400
            }
          )
        }
    
        if (!Types.ObjectId.isValid(productId)) {
          return new NextResponse(JSON.stringify({
            message: "Invalid ID"
          }),
            {
              status: 400
            }
          )
        }
    
        const updatedProduct = await Product.findOneAndUpdate(
          { _id: new ObjectId(productId) },
          { name: newProductName },
          { new: true }
        )
    
        if (!updatedProduct) {
          return new NextResponse(JSON.stringify({
            message: "Product not updated "
          }),
            {
              status: 400
            }
          )
        }
    
        return new NextResponse(JSON.stringify({
          product: updatedProduct,
          message: "Product updated successfully"
        }),
          {
            status: 200
          }
        );
    
      } catch (error) {
        return new NextResponse(JSON.stringify({ err: error, message: "Error updating oproduct" }), { status: 500 });
      }
};

// DELETE route to delete an existing product under a particular organisation
export const DELETE = async (req) => {
    try {
        const { searchParams } = new URL(req.url);
        const productId = searchParams.get('productId');
    
        if (!productId) {
          return new NextResponse(JSON.stringify({ message: "productId is required" }), { status: 400 });
        }
    
        if (!Types.ObjectId.isValid(productId)) {
          return new NextResponse(JSON.stringify({
            message: "Invalid ID"
          }),
            {
              status: 400
            }
          )
        }
    
        await connectToDatabase();
    
        //delete products services apis
    
        const deletedProduct = await Product.findByIdAndDelete(
          new Types.ObjectId(productId)
        );

        const organisation = await Organisation.findOneAndUpdate(
            { products: productId },
            { $pull: { products: productId } },
            { new: true }
        );
    
        if (!deletedProduct) {
          return new NextResponse(JSON.stringify({
            message: "Product not found"
          }),
            {
              status: 404
            }
          )
        }
    
        return new NextResponse(JSON.stringify({
          product: deletedProduct,
          organisation,
          message: "Product deleted successfully"
        }),
          {
            status: 200
          }
        );
    
      } catch (err) {
    
        return new NextResponse(JSON.stringify({ err: err, message: "Error deleting product" }), { status: 500 });
    
      }
};
