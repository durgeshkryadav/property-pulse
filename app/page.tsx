import Link from "next/link";
import React from "react";
const HomePage = () => {
  return (
    <>
      <h1 className='text-3xl'>Welcome</h1>
      <Link href='/properties'>Show Propeties</Link>
    </>
  );
};

export default HomePage;
