import React from "react";

export default ({ reference }) => {
  return (
    <div
      style={{
        width: 300,
        height: 150,
        background: "lightgray",
        padding: 16,
      }}
    >
      <h5>{reference.title}</h5>
      <p>{reference.childMdx.excerpt}</p>
    </div>
  );
};
