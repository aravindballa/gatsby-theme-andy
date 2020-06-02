import React from 'react';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/react';

import useWindowWidth from '../utils/useWindowWidth';
import components from './MdxComponents';
import ReferredBlock from './ReferredBlock';

const NOTE_WIDTH = 576;

const BrainNote = ({ note }) => {
  const [width] = useWindowWidth();

  const popups = {};
  if (note.outboundReferenceNotes) {
    note.outboundReferenceNotes
      .filter((reference) => !!reference.childMdx.excerpt)
      .forEach((ln, i) => {
        popups[ln.slug] = (
          <div
            id={ln.slug}
            className="w-64 p-4 bg-gray-100 rounded-lg shadow-lg border border-blue-200"
          >
            <h5 className="mb-2">{ln.title}</h5>
            <p className="text-sm">{ln.childMdx.excerpt}</p>
          </div>
        );
      });
  }

  const AnchorTagWithPopups = (props) => (
    <components.a {...props} popups={popups} noPopups={width < 768} />
  );

  return (
    <MDXProvider components={{ ...components, a: AnchorTagWithPopups }}>
      <div className="flex-1">
        <h1 className="my-4">{note.title}</h1>
        <MDXRenderer>{note.childMdx.body}</MDXRenderer>
      </div>

      {/* TODO factor out this complete component */}
      <div className="refs-box bg-indigo-100 text-gray-600 rounded-lg mb-4 p-4">
        <ReferredBlock references={note.inboundReferenceNotes} />
        <p className="text-sm m-0">
          If you think this note resonated, be it positive or negative, send me a{' '}
          <a href="https://twitter.com/messages/compose?recipient_id=">direct message</a> on Twitter
          or an <a href="#">email</a> and we can talk.
        </p>
      </div>
    </MDXProvider>
  );
};

export default BrainNote;
