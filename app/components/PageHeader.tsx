import React from "react";
import Image from "next/image";

const PageHeader = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex items-center px-4 py-2 shadow-lg bg-light-blue-100 z-50">
      <div className="flex items-center w-full">
        <Image
          src="/images/occ-black.png"
          alt="Company Logo"
          width={50}
          height={50}
        />
        <span className="pl-3">WebApp</span>
        <span className="ml-auto">Powered by Next.js15 from Vercel</span>
      </div>
    </div>
  );
};

export default PageHeader;
