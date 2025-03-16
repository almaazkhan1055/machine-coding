import Link from "next/link";
import React from "react";

const CustomLink = ({ text, bgColor, url, target }) => {
  return (
    <span>
      <Link
        href={url}
        target={target}
        className={`inline px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white`}
        style={{
          backgroundColor: bgColor,
        }}
      >
        {text}
      </Link>
    </span>
  );
};

export default CustomLink;
