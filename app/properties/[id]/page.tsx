"use client";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import { IProperty } from "@/interfaces/IProperty";
import { getProperty } from "@/request/request";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
const PropertyPage = async () => {
  const { id } = useParams();
  const [property, setProperty] = useState<IProperty | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | undefined>(false);

  const getpropertyAsync = async () => {
    setIsLoading(true);
    if (!id) return;
    try {
      const response = await getProperty(id as string);
      setProperty(response as IProperty);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (property === null) {
      getpropertyAsync();
    }
  }, [id, property]);
  if (!property && !isLoading) {
    return (
      <h1 className='text-center text-2xl font-bold'>Property Not Found</h1>
    );
  }
  return (
    <>
      {!isLoading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />
          <section>
            <div className='container m-auto py-6 px-6'>
              <Link
                href='/properties'
                className='text-blue-500 hover:text-blue-600 flex items-center'>
                <FaArrowLeft className='mr-2' /> Back to Properties
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default PropertyPage;
