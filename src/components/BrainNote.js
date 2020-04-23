import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import Portal from "@reach/portal";
import { MDXProvider } from "@mdx-js/react";

import components from "./MdxComponents";

const BrainNote = ({ note }) => {
  let references = [];
  let referenceBlock;
  if (note.inboundReferenceNotes != null) {
    references = note.inboundReferenceNotes.map((reference) => (
      <a href={`/${reference.slug}`} key={reference.slug}>
        <div>
          <h5>{reference.title}</h5>
          <p>{reference.childMdx.excerpt}</p>
        </div>
      </a>
    ));

    if (references.length > 0) {
      referenceBlock = (
        <>
          <h3>Refered in</h3>
          <div>{references}</div>
        </>
      );
    }
  }
  return (
    <MDXProvider components={components}>
      <div id="note">
        <div>
          <h1>{note.title}</h1>
          <MDXRenderer>{note.childMdx.body}</MDXRenderer>
        </div>
        <div>{referenceBlock}</div>
      </div>
      {note.outboundReferenceNotes &&
        note.outboundReferenceNotes
          .filter((reference) => !!reference.childMdx.excerpt)
          .map((ln, i) => (
            <Portal key={i}>
              <div id={ln.slug}>
                <h5>{ln.title}</h5>
                <p>{ln.childMdx.excerpt}</p>
              </div>
            </Portal>
          ))}
    </MDXProvider>
  );
};

export default BrainNote;
