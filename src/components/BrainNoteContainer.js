/** @jsx jsx */
import React from 'react';
import {
  useStackedPagesProvider,
  StackedPagesProvider,
  PageIndexProvider,
} from 'react-stacked-pages-hook';
import { Helmet } from 'react-helmet';
import { Styled, jsx, Flex, Box } from 'theme-ui';

import useWindowWidth from '../utils/useWindowWidth';
import Header from './Header';
import BrainNote from './BrainNote';
import { LinkToStacked } from './CustomLinkToStacked';

const NOTE_WIDTH = 576; // w-xl

const StackedPageWrapper = ({ i, ...rest }) => (
  <PageIndexProvider value={i}>
    <NoteWrapper {...rest} i={i} />
  </PageIndexProvider>
);

// A wrapper component to render the content of a page when stacked
const NoteWrapper = ({ children, slug, title, overlay, obstructed, highlighted, i }) => {
  return (
    <>
      <Flex
        bg={highlighted ? 'accent' : 'background'}
        px={3}
        className="note-container"
        sx={{
          flexDirection: 'column',
          flexShrink: 0,
          overflowY: 'auto',
          position: [null, null, 'sticky'], // here
          maxWidth: ['100%', '100%', '100vw'],
          boxShadow: overlay ? `0 0 8px rgba(0, 0, 0, 0.125)` : '',
          width: ['100%', '100%', NOTE_WIDTH],
          left: 40 * i,
          right: -585,
        }}
      >
        <Box
          sx={{
            display: ['none', 'none', 'block'],
            transition: 'opacity',
            transitionDuration: 100,
            opacity: obstructed ? 1 : 0,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              zIndex: 10,
              transform: 'rotate(90deg)',
              transformOrigin: 'left',
            }}
            pb={2}
          >
            <LinkToStacked
              to={slug}
              sx={{ fontWeight: 'bold', textDecoration: 'none', color: 'text' }}
            >
              {title || slug}
            </LinkToStacked>
          </Box>
        </Box>
        <Flex
          sx={{
            flexDirection: 'column',
            minHeight: '100%',
            transition: 'opacity',
            transitionDuration: 100,
            opacity: obstructed ? 0 : 1,
          }}
        >
          {children}
        </Flex>
      </Flex>
    </>
  );
};

const BrainNotesContainer = ({ slug, note, location, siteMetadata }) => {
  const [width] = useWindowWidth();

  // process data from gatsby pageQuery API
  const processPageQuery = React.useCallback((x) => x.brainNote, []);
  const [state, scrollContainer] = useStackedPagesProvider({
    firstPage: { slug, data: { brainNote: note } },
    location,
    processPageQuery,
    pageWidth: NOTE_WIDTH,
  });
  const { stackedPages, stackedPageStates } = state;

  let pages = stackedPages;
  let indexToShow;
  if (width < 768) {
    const activeSlug = Object.keys(state.stackedPageStates).find(
      (slug) => state.stackedPageStates[slug].active
    );
    indexToShow = state.stackedPages.findIndex((page) => page.slug === activeSlug);
    if (indexToShow === -1) {
      indexToShow = state.stackedPages.length - 1;
    }
    pages = [state.stackedPages[indexToShow]];
  }

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        height: '100vh',
        minHeight: '100vh',
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {note.title} - {siteMetadata.title}
        </title>
      </Helmet>
      <Header siteMetadata={siteMetadata} />

      <Flex
        ref={scrollContainer}
        sx={{
          flex: 1,
          flexGrow: 1,
          overflowX: [null, null, 'auto'],
          overflowY: 'hidden',
        }}
      >
        <Flex
          className="note-columns-container"
          sx={{
            minWidth: 'unset',
            flexGrow: 1,
            transition: [null, null, 'width'],
            transitionDuration: 100,
            width: ['100%', '100%', NOTE_WIDTH * (pages.length + 1)],
          }}
        >
          <StackedPagesProvider value={state}>
            {/* Render the stacked pages */}
            {pages.map((page, i) => (
              <StackedPageWrapper
                i={i}
                key={page.slug}
                slug={page.slug}
                title={page.data.title}
                overlay={stackedPageStates[page.slug] && stackedPageStates[page.slug].overlay}
                obstructed={
                  indexToShow !== undefined
                    ? false
                    : stackedPageStates[page.slug] && stackedPageStates[page.slug].obstructed
                }
                highlighted={
                  stackedPageStates[page.slug] && stackedPageStates[page.slug].highlighted
                }
              >
                <BrainNote note={page.data} />
              </StackedPageWrapper>
            ))}
          </StackedPagesProvider>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BrainNotesContainer;
