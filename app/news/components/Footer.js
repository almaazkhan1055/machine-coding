import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#101828] text-white text-md px-10 py-5 flex items-center justify-between">
      <span>© 2025 NY Times Popular Articles</span>
      <span className="">
        Data provided by{" "}
        <Link
          href={"https://developer.nytimes.com/"}
          className="hover:border-b hover:border-b-blue-400 text-blue-400"
        >
          The New York Times API
        </Link>
      </span>
    </div>
  );
};

export default Footer;
