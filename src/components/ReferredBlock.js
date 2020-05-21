import React from 'react';
import { LinkToStacked } from 'react-stacked-pages-hook';
import { useStaticQuery, graphql } from 'gatsby';

export default ({ references }) => {
  // support for custom rootNote
  const {
    sitePlugin: { pluginOptions },
  } = useStaticQuery(graphql`
    query ThemeBrainOptions {
      sitePlugin(name: { eq: "@aengusm/gatsby-theme-brain" }) {
        pluginOptions {
          rootNote
          rootPath
        }
      }
    }
  `);

  if (references.length > 0) {
    return (
      <>
        <h3>Referred in</h3>
        <ul>
          {references.map((reference) => {
            const slug =
              reference.slug === pluginOptions.rootNote
                ? pluginOptions.rootPath
                : `/${reference.slug}`;
            return (
              <li key={slug}>
                <LinkToStacked to={slug}>{reference.title}</LinkToStacked> -{' '}
                {reference.childMdx.excerpt}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  return null;
};
