"use client";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import Spinner from "@/components/Spinner";
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

  useEffect(() => {
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
      {isLoading && <Spinner loading={isLoading} />}
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
          <>
            {/* Property Info */}
            <section className='bg-blue-50'>
              <div className='container m-auto py-10 px-6'>
                <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
                  <PropertyDetails property={property} />
                  {/* Sidebar */}
                  <aside className='space-y-4'>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'>
                      <i className='fas fa-bookmark mr-2' /> Bookmark Property
                    </button>
                    <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'>
                      <i className='fas fa-share mr-2' /> Share Property
                    </button>
                    {/* Contact Form */}
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                      <h3 className='text-xl font-bold mb-6'>
                        Contact Property Manager
                      </h3>
                      <form>
                        <div className='mb-4'>
                          <label
                            className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor='name'>
                            Name:
                          </label>
                          <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='name'
                            type='text'
                            placeholder='Enter your name'
                            required=''
                          />
                        </div>
                        <div className='mb-4'>
                          <label
                            className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor='email'>
                            Email:
                          </label>
                          <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='email'
                            type='email'
                            placeholder='Enter your email'
                            required=''
                          />
                        </div>
                        <div className='mb-4'>
                          <label
                            className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor='phone'>
                            Phone:
                          </label>
                          <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='phone'
                            type='text'
                            placeholder='Enter your phone number'
                          />
                        </div>
                        <div className='mb-4'>
                          <label
                            className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor='message'>
                            Message:
                          </label>
                          <textarea
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline'
                            id='message'
                            placeholder='Enter your message'
                            defaultValue={""}
                          />
                        </div>
                        <div>
                          <button
                            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'
                            type='submit'>
                            <i className='fas fa-paper-plane mr-2' /> Send
                            Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </aside>
                </div>
              </div>
            </section>
          </>
        </>
      )}
    </>
  );
};

export default PropertyPage;
