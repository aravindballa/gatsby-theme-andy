/** @jsx jsx */
import React from 'react';
import { useStackedPagesProvider, LinkToStacked } from 'react-stacked-pages-hook';
import { Helmet } from 'react-helmet';
import { Styled, jsx, Flex, Box } from 'theme-ui';

import Header from './Header';
import BrainNote from './BrainNote';

import '../styles.css';

const NOTE_WIDTH = 576; // w-xl

// A wrapper component to render the content of a page when stacked
const StackedPageWrapper = ({
  PageIndexProvider,
  children,
  slug,
  title,
  overlay,
  obstructed,
  i,
}) => (
  <PageIndexProvider value={i}>
    <Flex
      bg="background"
      px={3}
      className="note-container"
      sx={{
        flexDirection: 'column',
        flexShrink: 0,
        overflowY: 'auto',
        position: [null, null, 'sticky'],
        maxWidth: ['100%', '100%', '100vw'],
        boxShadow: overlay ? `0 0 8px rgba(0, 0, 0, 0.125)` : '',
        width: NOTE_WIDTH,
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
          <LinkToStacked to={slug}>
            <Styled.p sx={{ m: 0, fontWeight: 'bold' }}>{title || slug}</Styled.p>
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
  </PageIndexProvider>
);

const BrainNotesContainer = ({ slug, note, location, siteMetadata }) => {
  // process data from gatsby pageQuery API
  const processPageQuery = React.useCallback((x) => x.json.data.brainNote, []);
  const [
    stackedPages,
    stackedPageStates,
    navigateToStackedPage,
    ContextProvider,
    PageIndexProvider,
    scrollContainer,
  ] = useStackedPagesProvider({
    firstPageSlug: slug,
    location,
    processPageQuery,
    pageWidth: NOTE_WIDTH,
  });

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
            width: ['100vw', '100vw', NOTE_WIDTH * (stackedPages.length + 1)],
          }}
        >
          <ContextProvider value={{ stackedPages, navigateToStackedPage }}>
            {/* Render the first page */}
            <StackedPageWrapper
              PageIndexProvider={PageIndexProvider}
              i={0}
              slug={slug}
              title={note.title}
              overlay={stackedPageStates[slug] && stackedPageStates[slug].overlay}
              obstructed={stackedPageStates[slug] && stackedPageStates[slug].obstructed}
            >
              <BrainNote note={note} />
            </StackedPageWrapper>

            {/* Render the stacked pages */}
            {stackedPages.map((page, i) => (
              <StackedPageWrapper
                PageIndexProvider={PageIndexProvider}
                i={i + 1}
                key={page.slug}
                slug={page.slug}
                title={page.data.title}
                overlay={stackedPageStates[page.slug] && stackedPageStates[page.slug].overlay}
                obstructed={stackedPageStates[page.slug] && stackedPageStates[page.slug].obstructed}
              >
                <BrainNote note={page.data} />
              </StackedPageWrapper>
            ))}
          </ContextProvider>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BrainNotesContainer;
