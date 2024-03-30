import { IProperty } from "@/interfaces/IProperty";
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
const fetchProperties = async () => {
    try {
        if(!apiDomain){
            console.log("apiDomain is null");
            return [];
        }
      const response = await fetch(
        `${apiDomain}/properties`
      );
      if (!response.ok) {
        throw new Error("Something went wrong, properties data not fetched");
      }
      const jsonData: IProperty[] = await response.json();
      return jsonData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  export {fetchProperties};