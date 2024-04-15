import { NextResponse } from "next/server";
import connect from "../../lib/db"
import Organisation from "../../lib/models/organisation";
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;

const connectToDatabase = async () => {
  await connect();
};

export const GET = async () => {
  try {
    await connectToDatabase();
    const organisations = await Organisation.find();
    return new NextResponse(JSON.stringify(organisations),
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse("Error in fetching collections" + err, { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    const body = await req.json();
    await connectToDatabase();

    const organisation = new Organisation(body);
    await organisation.save();


    return new NextResponse(JSON.stringify({ org: organisation, message: "new org created" }), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ err: error, message: "Error in creating organization" }), { status: 500 });
  }
};


export const PATCH = async (req) => {
  try {
    const body = await req.json();
    const { orgId, newOrgName, newOrgDesc } = body;
    await connectToDatabase();

    if (!orgId || !newOrgName || !newOrgDesc) {
      return new NextResponse(JSON.stringify({
        message: "ID or organisation name and description required"
      }),
        {
          status: 400
        }
      )
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

    const updatedOrg = await Organisation.findOneAndUpdate(
      { _id: new ObjectId(orgId) },
      { name: newOrgName, description: newOrgDesc },
      { new: true }
    )

    if (!updatedOrg) {
      return new NextResponse(JSON.stringify({
        message: "Organisation not updated "
      }),
        {
          status: 400
        }
      )
    }

    return new NextResponse(JSON.stringify({
      org: updatedOrg,
      message: "Organisation updated successfully"
    }),
      {
        status: 200
      }
    );

  } catch (error) {
    return new NextResponse(JSON.stringify({ err: error, message: "Error updating organization" }), { status: 500 });
  }
};


export const DELETE = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const orgId = searchParams.get('orgId');

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

    //delete products services apis

    const deletedOrg = await Organisation.findByIdAndDelete(
      new Types.ObjectId(orgId)
    );

    if (!deletedOrg) {
      return new NextResponse(JSON.stringify({
        message: "Organisation not found"
      }),
        {
          status: 404
        }
      )
    }

    return new NextResponse(JSON.stringify({
      org: deletedOrg,
      message: "Organisation deleted successfully"
    }),
      {
        status: 200
      }
    );

  } catch (err) {

    return new NextResponse(JSON.stringify({ err: err, message: "Error deleting organization" }), { status: 500 });

  }
}