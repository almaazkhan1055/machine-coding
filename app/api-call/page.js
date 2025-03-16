"use client";

import React, { useEffect, useState } from "react";
import Post from "./components/post";

const ApiCall = () => {
  const [usersData, setUsersData] = useState([]);
  console.log("usersData", usersData);

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
    <div>
      <Post data={usersData} />
    </div>
  );
};

export default ApiCall;
