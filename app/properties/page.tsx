import React from "react";
import PropertyCard from "@/components/PropertyCard";
import { fetchProperties } from "@/request/request";

const Properties = async () => {
  const propperties = await fetchProperties();
  //sort by date
  propperties?.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  if (propperties !== undefined && propperties !== null) {
    return (
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {propperties.length === 0 ? (
              <div>No properties found</div>
            ) : (
              propperties.map((propperty, index) => {
                return (
                  <PropertyCard key={propperty._id} property={propperty} />
                );
              })
            )}
          </div>
        </div>
      </section>
    );
  } else {
    return <div />;
  }
};

export default Properties;
