"use client";
import React, { useState } from "react";
import AboutTask from "../AboutTask";

const FormData = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    age: "",
    errors: {},
    data: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      firstname: !/^[A-Za-z]+$/.test(state.firstname.trim()),
      lastname: !/^[A-Za-z]+$/.test(state.lastname.trim()),
      age: !/^\d+$/.test(state.age) || Number(state.age) < 18,
    };

    if (Object.values(newErrors).some((error) => error)) {
      setState((prev) => ({ ...prev, errors: newErrors }));
      return;
    }

    setState((prev) => ({
      firstname: "",
      lastname: "",
      age: "",
      errors: {},
      data: [
        ...prev.data,
        { firstname: prev.firstname, lastname: prev.lastname, age: prev.age },
      ],
    }));
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center py-5">
      <AboutTask
        text={
          "This task requires you to manage form inputs, validation errors, and submitted data using only one state variable in a React component."
        }
      />
      <h1 className="font-semibold text-3xl">Enter Your Details</h1>
      <form
        className="flex gap-5 flex-col w-[350px]"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          name="firstname"
          className={`bg-gray-200 p-2 text-black text-xl rounded-lg ${
            state.errors.firstname ? "border-red-500 border-2" : ""
          }`}
          placeholder="First Name"
          onChange={handleChange}
          value={state.firstname}
        />
        {state.errors.firstname && (
          <label className="text-red-500">
            Please enter a valid first name
          </label>
        )}
        <input
          type="text"
          name="lastname"
          className={`bg-gray-200 p-2 text-black text-xl rounded-lg ${
            state.errors.lastname ? "border-red-500 border-2" : ""
          }`}
          placeholder="Last Name"
          onChange={handleChange}
          value={state.lastname}
        />
        {state.errors.lastname && (
          <label className="text-red-500">Please enter a valid last name</label>
        )}
        <input
          type="number"
          name="age"
          className={`bg-gray-200 p-2 text-black text-xl rounded-lg ${
            state.errors.age ? "border-red-500 border-2" : ""
          }`}
          placeholder="Age"
          onChange={handleChange}
          value={state.age}
        />
        {state.errors.age && (
          <label className="text-red-500">Must be 18 or older</label>
        )}
        <button className="px-5 py-2 bg-white text-black cursor-pointer hover:bg-green-500 hover:text-white font-semibold">
          Submit
        </button>
      </form>

      <h2 className="text-3xl">Submitted Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {state.data.map((item, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="font-bold text-lg text-zinc-900">
              {item.firstname} {item.lastname}
            </h2>
            <p className="text-gray-600">Age: {item.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormData;
