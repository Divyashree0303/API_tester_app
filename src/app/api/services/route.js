import { NextResponse } from "next/server";
import connectToDatabase from "../../lib/db";
import Product from "../../lib/models/Product";
import Service from "../../lib/models/Service";
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;

// GET route to fetch all products of a particular organisation
export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get('productId');



    if (!productId) {
      return new NextResponse(JSON.stringify({ message: "product Id is required" }), { status: 400 });
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

   

    const services = await Service.find({ product: productId });
    return new NextResponse(JSON.stringify(services), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Error fetching products" ,error:error }), { status: 500 });
  }
};

// POST route to create a new product under a particular organisation
export const POST = async (req) => {
  try {
    const body = await req.json();
    await connectToDatabase();

    const newService = new Service(body);
    await newService.save();

    await Product.findByIdAndUpdate(
        body.product,
        { $push: { services: newService._id } },
        { new: true }
      );

    return new NextResponse(JSON.stringify(newService), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Error creating service",error:error }), { status: 500 });
  }
};

// PATCH route to update an existing product under a particular organisation
export const PATCH = async (req) => {
    try {
        const body = await req.json();
        const { serviceId, newServiceName} = body;
        await connectToDatabase();
    
        if (!serviceId || !newServiceName) {
          return new NextResponse(JSON.stringify({
            message: "ID or pservice name  required"
          }),
            {
              status: 400
            }
          )
        }
    
        if (!Types.ObjectId.isValid(serviceId)) {
          return new NextResponse(JSON.stringify({
            message: "Invalid ID"
          }),
            {
              status: 400
            }
          )
        }
    
        const updatedService = await Service.findOneAndUpdate(
          { _id: new ObjectId(serviceId) },
          { name: newServiceName },
          { new: true }
        )
    
        if (!updatedService) {
          return new NextResponse(JSON.stringify({
            message: "service not updated "
          }),
            {
              status: 400
            }
          )
        }
    
        return new NextResponse(JSON.stringify({
          service: updatedService,
          message: "service updated successfully"
        }),
          {
            status: 200
          }
        );
    
      } catch (error) {
        return new NextResponse(JSON.stringify({ err: error, message: "Error updating service" }), { status: 500 });
      }
};

// DELETE route to delete an existing product under a particular organisation
export const DELETE = async (req) => {
    try {
        const { searchParams } = new URL(req.url);
        const serviceId = searchParams.get('serviceId');
    
        if (!serviceId) {
          return new NextResponse(JSON.stringify({ message: "service Id is required" }), { status: 400 });
        }
    
        if (!Types.ObjectId.isValid(serviceId)) {
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
    
        const deletedService= await Service.findByIdAndDelete(
          new Types.ObjectId(serviceId)
        );

        const product = await Product.findOneAndUpdate(
            { services: serviceId },
            { $pull: { services: serviceId } },
            { new: true }
        );
    
        if (!deletedService) {
          return new NextResponse(JSON.stringify({
            message: "service not found"
          }),
            {
              status: 404
            }
          )
        }
    
        return new NextResponse(JSON.stringify({
          service: deletedService,
          message: "service deleted successfully"
        }),
          {
            status: 200
          }
        );
    
      } catch (err) {
    
        return new NextResponse(JSON.stringify({ err: err, message: "Error deleting service" }), { status: 500 });
    
      }
};
