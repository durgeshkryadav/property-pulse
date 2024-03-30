import { IProperty } from "@/interfaces/IProperty";
import Image from "next/image";
import React from "react";
import { IPropertyProps } from "./PropertyCard";
interface IPropertyHeaderImageprops {
  image: string;
}
const PropertyHeaderImage = ({ image }: IPropertyHeaderImageprops) => {
  return (
    <section>
      <div className='container-xl m-auto'>
        <div className='grid grid-cols-1'>
          <Image
            src={`/images/properties/${image}`}
            height={0}
            alt=''
            className='object-cover h-[400px] w-full'
            width='1800'
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeaderImage;
