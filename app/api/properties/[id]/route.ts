import connectDB from "@/config/database";
import Property from "@/models/Property";
//GET /api/properties:id
export const GET = async (request: any,{params}:any) => {
  try {
    await connectDB();
    const property = await Property.findById(params.id);
    if(!property){
        return new Response("Property Not Found", { status: 400 });
    }
    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
