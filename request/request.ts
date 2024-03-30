import { IProperty } from "@/interfaces/IProperty";
import axios, { AxiosResponse } from "axios";
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
const fetchProperties = async () => {
  try {
    if (!apiDomain) {
      console.log("apiDomain is null");
      return [];
    }
    const response: AxiosResponse<IProperty[]> = await axios.get<IProperty[]>(
      `${apiDomain}/properties`
    );
    if (response.data.length === 0) {
      throw new Error("Something went wrong, properties data not fetched");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export { fetchProperties };
