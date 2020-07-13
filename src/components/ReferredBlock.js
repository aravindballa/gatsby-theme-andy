/** @jsx jsx */
import React from 'react';
import { LinkToStacked } from './CustomLinkToStacked';
import { Link } from 'gatsby';
import { Styled, jsx, Heading } from 'theme-ui';

import useWindowWidth from '../utils/useWindowWidth';

export default ({ references }) => {
  const [width] = useWindowWidth();

  if (references.length > 0) {
    const RefLink = width < 768 ? Link : LinkToStacked;

    return (
      <>
        <Heading as="h4" color="text-light">
          Referred in
        </Heading>
        <div sx={{ mb: 2 }}>
          {references.map((reference) => {
            return (
              <RefLink
                sx={{
                  textDecoration: 'none',
                  color: 'text-light',
                  ':hover': {
                    color: 'text',
                  },
                }}
                to={`/${reference.slug}`}
                key={reference.slug}
              >
                <div sx={{ py: 2 }}>
                  <Styled.p sx={{ fontSize: 2, m: 0, color: 'text-light' }}>
                    {reference.title}
                  </Styled.p>
                  <Styled.p sx={{ fontSize: 1, m: 0, color: 'text-light' }}>
                    {reference.childMdx.excerpt}
                  </Styled.p>
                </div>
              </RefLink>
            );
          })}
        </div>
        <hr sx={{ mx: 'auto', width: 64 }} />
      </>
    );
  }
  return null;
};
