import connectDB from "@/config/database";
import Property from '@/models/Property';
import { Schema } from "mongoose";

export const GET = async (request: any, { params }: any) => {
  try {
    await connectDB();
    const property = await Property.findOne({id:params.id});
    if (property !== null) {
      return new Response(JSON.stringify(property), { status: 200 });
    } else {
      console.log("Property not found");
      return new Response("Property Not Found", { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    return new Response("Something went wrong", { status: 500 });
  }
};
