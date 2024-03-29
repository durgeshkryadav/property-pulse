import Link from "next/link";
import React from "react";
export interface IInfoBoxProps {
  heading: string;
  backGroundColor: string;
  textColor: string;
  buttoninfo: { link: string; backGroundColor: string; text: string };
  children: string;
}
const InfoBox = ({
  heading,
  backGroundColor = "bg-gray-100",
  textColor = "text-gray-800",
  buttoninfo,
  children,
}: IInfoBoxProps) => {
  return (
    <div className={`${backGroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <Link
        href={buttoninfo.link}
        className={`${buttoninfo.backGroundColor} inline-block  text-white rounded-lg px-4 py-2 hover:opacity-80`}>
        {buttoninfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
