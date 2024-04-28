// controllers/api.js
import { NextResponse } from "next/server";
import connect from "../../lib/db";
import Api from "../../lib/models/Api";
import Service from "../../lib/models/Service"
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;

const connectToDatabase = async () => {
  await connect();
};

export const GET = async (req) => {
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

   

    const apis = await Api.find({ service: serviceId });
    return new NextResponse(JSON.stringify(apis), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Error fetching apis" ,error:error }), { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    const body = await req.json();

    // Check if required fields are present
    if (!body.name || !body.service || !body.method || !body.url) {
      return new NextResponse(JSON.stringify({ message: "Name, service, method, and URL are required" }), { status: 400 });
    }

    await connectToDatabase();

    const api = new Api(body);
    await api.save();

    await Service.findByIdAndUpdate(
        body.service,
        { $push: { apis: api._id } },
        { new: true }
      );

    return new NextResponse(JSON.stringify({ api, message: "New API created" }), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error, message: "Error in creating API" }), { status: 500 });
  }
};

export const PATCH = async (req) => {
  try {
    const body = await req.json();
    const { apiId, name, url, method, ...updatedFields } = body;

    // Check if required fields are present
    if (!apiId || !name || !url || !method) {
      return new NextResponse(JSON.stringify({ message: "API ID, name, url, and method are required" }), { status: 400 });
    }

    await connectToDatabase();

    if (!Types.ObjectId.isValid(apiId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid API ID" }), { status: 400 });
    }

    const updatedApi = await Api.findOneAndUpdate(
      { _id: new ObjectId(apiId) },
      { name, url, method, ...updatedFields },
      { new: true }
    );

    if (!updatedApi) {
      return new NextResponse(JSON.stringify({ message: "API not updated" }), { status: 400 });
    }

    return new NextResponse(JSON.stringify({ api: updatedApi, message: "API updated successfully" }), { status: 200 });

  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ error:error, message: "Error updating API" }), { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const apiId = searchParams.get('apiId');

    if (!apiId) {
      return new NextResponse(JSON.stringify({ message: "API ID is required" }), { status: 400 });
    }

    if (!Types.ObjectId.isValid(apiId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid API ID" }), { status: 400 });
    }

    await connectToDatabase();

    const deletedApi = await Api.findByIdAndDelete(new Types.ObjectId(apiId));

    // const service = await Service.findOneAndUpdate(
    //     { apis: apiId },
    //     { $pull: { apis: apiId } },
    //     { new: true }
    // );

    if (!deletedApi) {
      return new NextResponse(JSON.stringify({ message: "API not found" }), { status: 404 });
    }

    return new NextResponse(JSON.stringify({ api: deletedApi, message: "API deleted successfully" }), { status: 200 });

  } catch (error) {
    return new NextResponse(JSON.stringify({ error, message: "Error deleting API" }), { status: 500 });
  }
};
