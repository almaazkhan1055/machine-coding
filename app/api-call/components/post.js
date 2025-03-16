import React from "react";

const Post = ({ data }) => {
  console.log(data);

  return (
    <ul>
      {data[0]?.posts.map((node) => {
        return <li key={node.id}>{node.title}</li>;
      })}
    </ul>
  );
};

export default Post;
