import React from 'react';

export default ({ reference }) => {
  return (
    <div
      style={{
        width: 300,
        height: 150,
        background: 'lightgray',
        padding: 8,
      }}
    >
      <h3>{reference.title}</h3>
      <p>{reference.childMdx.excerpt}</p>
    </div>
  );
};
