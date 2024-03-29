import React from "react";
import properties from "@/properties.json";
import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";
import { IRates } from "./PropertyCard";

const HomeProperties = () => {
  const recentProperties = properties
    .sort(() => Math.random() - Math.random())
    .splice(0, 3);
  const getrateDisplay = (rates: IRates) => {
    if (rates.monthly) {
      return `$ ${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `$ ${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `$ ${rates.nightly.toLocaleString()}/night`;
    }
  };
  return (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>
          Recent Properties
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {recentProperties.map((item, index) => {
            return (
              <div
                key={item._id}
                className='bg-white rounded-xl shadow-md relative'>
                <Image
                  src={`/images/properties/${item.images[0]}`}
                  alt=''
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-full rounded-t-xl'
                />
                <div className='p-4'>
                  <div className='text-left md:text-center lg:text-left mb-6'>
                    <div className='text-gray-600'>{item.type}</div>
                    <h3 className='text-xl font-bold'>{item.name}</h3>
                  </div>
                  <h3 className='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
                    {getrateDisplay(item.rates as IRates)}
                  </h3>
                  <div className='flex justify-center gap-4 text-gray-500 mb-4'>
                    {item.beds && (
                      <p>
                        <FaBed className='inline mr-2' /> {item.beds} Beds
                      </p>
                    )}
                    {item.baths && (
                      <p>
                        <FaBath className='inline mr-2' /> {item.baths} Baths
                      </p>
                    )}
                    {item.square_feet && (
                      <p>
                        <FaRulerCombined className='inline mr-2' />
                        {item.square_feet} sqft
                      </p>
                    )}
                  </div>
                  <div className='flex justify-center gap-4 text-green-900 text-sm mb-4'>
                    {item.rates.nightly && (
                      <p>
                        <FaMoneyBill className='inline mr-2' /> Nightly
                      </p>
                    )}
                    {item.rates.weekly && (
                      <p>
                        <FaMoneyBill className='inline mr-2' /> Weekly
                      </p>
                    )}
                    {item.rates.monthly && (
                      <p>
                        <FaMoneyBill className='inline mr-2' /> Monthly
                      </p>
                    )}
                  </div>
                  <div className='border border-gray-100 mb-5' />
                  <div className='flex flex-col lg:flex-row justify-between mb-4'>
                    <div className='flex align-middle gap-2 mb-4 lg:mb-0'>
                      <FaMapMarker className='text-orange-700' />{" "}
                      <span className='text-orange-700'>
                        {" "}
                        {item.location.city} {item.location.state}{" "}
                      </span>
                    </div>
                    <Link
                      href={`properties/${item._id}`}
                      className='h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm'>
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeProperties;
