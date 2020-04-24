import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import Portal from "@reach/portal";
import { MDXProvider } from "@mdx-js/react";

import components from "./MdxComponents";
import Popover from "./Popover";
import ReferredBlock from "./ReferredBlock";

const BrainNote = ({ note }) => {
  note.inboundReferenceNotes = note.inboundReferenceNotes || [];
  note.outboundReferenceNotes = note.outboundReferenceNotes || [];
  return (
    <MDXProvider components={components}>
      <div id="note">
        <div>
          <h1>{note.title}</h1>
          <MDXRenderer>{note.childMdx.body}</MDXRenderer>
        </div>
        <ReferredBlock references={note.inboundReferenceNotes} />
      </div>
      {note.outboundReferenceNotes
        .filter((reference) => !!reference.childMdx.excerpt)
        .map((ln, i) => (
          <Portal key={i}>
            <div id={ln.slug} style={{ display: "none", position: "fixed" }}>
              <Popover reference={ln} />
            </div>
          </Portal>
        ))}
    </MDXProvider>
  );
};

export default BrainNote;
