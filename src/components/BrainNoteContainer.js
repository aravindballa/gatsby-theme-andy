import React from 'react';
import { useStackedPagesProvider, LinkToStacked } from 'react-stacked-pages-hook';

import BrainNote from './BrainNote';
import Header from './Header';

import '../styles.css';

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
    <div
      className={`note-container ${overlay ? 'note-container-overlay' : ''} ${
        obstructed ? 'note-container-obstructed' : ''
      }`}
      style={{ left: 40 * i, right: -585 }}
    >
      <div className="note-content">{children}</div>
      <LinkToStacked to={slug} className="obstructed-label">
        {title || slug}
      </LinkToStacked>
    </div>
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
    pageWidth: 625,
  });

  return (
    <div className="notes-layout">
      <Header siteMetadata={siteMetadata} />
      <div className="note-columns-scrolling-container" ref={scrollContainer}>
        <div className="note-columns-container" style={{ width: 625 * (stackedPages.length + 1) }}>
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
        </div>
      </div>
    </div>
  );
};

export default BrainNotesContainer;
