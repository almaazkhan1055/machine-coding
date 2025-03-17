"use client";

import React, { useEffect, useState } from "react";
import Post from "./components/post";
import AboutTask from "../AboutTask";

const ApiCall = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        users.map((user) => {
          fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then((res) => res.json())
            .then((posts) =>
              setUsersData((prev) => [...prev, { ...user, posts }])
            );
        })
      );
  }, []);
  return (
    <div className="flex flex-col items-center justify-between py-10 gap-10">
      <AboutTask
        text={
          "This task involves making an API call to fetch and display user data along with their associated posts. The component first retrieves a list of users from the JSONPlaceholder API and then, for each user, fetches their posts asynchronously. these are the api's https://jsonplaceholder.typicode.com/users , https://jsonplaceholder.typicode.com/users/{userid}/posts"
        }
      />
      <Post data={usersData} />
    </div>
  );
};

export default ApiCall;
