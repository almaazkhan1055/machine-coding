import Link from "next/link";
import React from "react";

const Home = () => {
  const projects = [
    {
      title: "Stop Watch",
      href: "/stopwatch",
    },
    {
      title: "Flipping Cards",
      href: "/flipping-cards",
    },
    {
      title: "Api-call Test",
      href: "/api-call",
    },
    {
      title: "News",
      href: "/news",
    },
    {
      title: "Grid-Lights",
      href: "/grid-lights",
    },
  ];
  return (
    <div className="flex flex-col gap-10 py-10 justify-center items-center">
      <h1 className="text-5xl text-center">Welcome to machine coding round</h1>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center gap-10">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.href}
            className="border border-white px-12 py-6 font-semibold hover:bg-white hover:text-black rounded-lg"
          >
            {project.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
