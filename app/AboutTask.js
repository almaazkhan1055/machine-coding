import React from "react";

const AboutTask = ({ text }) => {
  return (
    <div className="lg:w-[50%] text-lg p-5 bg-zinc-900 text-zinc-500 font-bold rounded-xl">
      📌{text}
    </div>
  );
};

export default AboutTask;
