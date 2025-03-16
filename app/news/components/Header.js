import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#101828] text-white sm:text-4xl text-2xl font-semibold px-10 py-5">
      <Link href="/news">NY Times Popular Articles</Link>
    </header>
  );
};

export default Header;
