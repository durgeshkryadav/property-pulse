"use client";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import { IProperty } from "@/interfaces/IProperty";
import { getProperty } from "@/request/request";
import { loadBindings } from "next/dist/build/swc";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const PropertyPage = async () => {
  const [property, setProperty] = useState<IProperty | undefined>();
  const [isLoading, setIsLoading] = useState<boolean | undefined>(false);

  const { id } = useParams();
  useEffect(() => {
    const getpropertyAsync = async () => {
      setIsLoading(true);
      try {
        const response = await getProperty(id as string);
        if (response) {
          console.log(response);
          setProperty(response as IProperty);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("inside property component..");
        console.log(error);
      }
    };
    getpropertyAsync();
  }, []);

  return (
    <>
      {!isLoading && property && (
        <PropertyHeaderImage image={property.images[0]} />
      )}
    </>
  );
};

export default PropertyPage;
