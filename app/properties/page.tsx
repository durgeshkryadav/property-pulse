import React from "react";
import propperties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";

const Properties = () => {
  return (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {propperties.length === 0 ? (
            <div>No properties found</div>
          ) : (
            propperties.map((propperty, index) => {
              return <PropertyCard key={propperty._id} property={propperty} />;
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Properties;
