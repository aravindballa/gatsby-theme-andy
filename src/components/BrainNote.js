/** @jsx jsx */
import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Styled, ThemeProvider, jsx } from 'theme-ui';

import useWindowWidth from '../utils/useWindowWidth';
import components from './MdxComponents';
import Footer from './Footer';
import Popover from './Popover';

import theme from '../theme';

const BrainNote = ({ note }) => {
  const [width] = useWindowWidth();

  const popups = {};
  if (note.outboundReferenceNotes) {
    note.outboundReferenceNotes
      .filter((reference) => !!reference.childMdx.excerpt)
      .forEach((ln, i) => {
        popups[ln.slug] = <Popover reference={ln} />;
      });
  }

  const AnchorTagWithPopups = (props) => (
    <components.a {...props} popups={popups} noPopups={width < 768} />
  );

  return (
    <ThemeProvider theme={theme} components={{ ...components, a: AnchorTagWithPopups }}>
      <div sx={{ flex: '1' }}>
        <Styled.h1 sx={{ my: 3 }}>{note.title}</Styled.h1>
        <MDXRenderer>{note.childMdx.body}</MDXRenderer>
      </div>

      <Footer references={note.inboundReferenceNotes} />
    </ThemeProvider>
  );
};

export default BrainNote;
