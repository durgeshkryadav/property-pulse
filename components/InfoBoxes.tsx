import React from "react";
import InfoBoxe, { IInfoBoxProps } from "./InfoBox";
import InfoBox from "./InfoBox";
export const InfoBoxData: IInfoBoxProps[] = [
  {
    heading: "For Renters",
    backGroundColor: "bg-gray-100",
    textColor: "text-gray-800",
    buttoninfo: {
      link: "/link1",
      backGroundColor: "bg-black",
      text: "Browse Properties",
    },
    children:
      "Find your dream rental property. Bookmark properties and contact owners.",
  },
  {
    heading: "For Property Owners",
    backGroundColor: "bg-blue-100",
    textColor: "text-gray-800",
    buttoninfo: {
      link: "/link2",
      backGroundColor: "bg-blue-500",
      text: "Add Property",
    },
    children:
      "List your properties and reach potential tenants. Rent as an airbnb or long term.",
  },
];
const InfoBoxes = () => {
  return (
    <>
      {/* Renters and Owners */}
      <section>
        <div className='container-xl lg:container m-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
            {InfoBoxData.map((item, index) => {
              return (
                <InfoBox
                  key={index}
                  heading={item.heading}
                  backGroundColor={item.backGroundColor}
                  textColor={item.textColor}
                  buttoninfo={item.buttoninfo}
                  children={item.children}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoBoxes;
