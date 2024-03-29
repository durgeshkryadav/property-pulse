import Link from "next/link";
import React from "react";
import Image from "next/image";
import footerLogo from "@/assets/images/logo.png";

const Footer = () => {
  return (
    <footer className='bg-gray-200 py-4 mt-auto'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4'>
        <div className='mb-4 md:mb-0'>
          <Image src={footerLogo} alt='FooterLogo' className='h-8 w-auto' />
        </div>
        <div className='flex flex-wrap justify-center md:justify-start mb-4 md:mb-0'>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/properties.html'>Properties</Link>
            </li>
            <li>
              <Link href='/terms.html'>Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-sm text-gray-500 mt-2 md:mt-0'>
            © 2024 PropertyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
