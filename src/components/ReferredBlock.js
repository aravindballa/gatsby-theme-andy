import React from "react";

export default ({ references }) => {
  if (references.length > 0) {
    return (
      <>
        <h3>Referred in</h3>
        <ul>
          {references.map((reference) => (
            <li key={reference.slug}>
              <a href={`/${reference.slug}`}>{reference.title}</a> -{" "}
              {reference.childMdx.excerpt}
            </li>
          ))}
        </ul>
      </>
    );
  }
  return null;
};
