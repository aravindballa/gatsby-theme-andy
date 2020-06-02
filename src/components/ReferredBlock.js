import React from 'react';
import { LinkToStacked } from 'react-stacked-pages-hook';
import { Link } from 'gatsby';

import useWindowWidth from '../utils/useWindowWidth';

export default ({ references }) => {
  const [width] = useWindowWidth();

  if (references.length > 0) {
    const RefLink = width < 768 ? Link : LinkToStacked;

    return (
      <>
        <h3>Referred in</h3>
        <div className="mb-4">
          {references.map((reference) => {
            return (
              <RefLink
                className="no-underline hover:text-gray-700"
                to={reference.slug}
                key={reference.slug}
              >
                <div className="py-2">
                  <h5 className="">{reference.title}</h5>
                  <p className="text-sm m-0">{reference.childMdx.excerpt}</p>
                </div>
              </RefLink>
            );
          })}
        </div>
        <hr className="mx-auto w-32" />
      </>
    );
  }
  return null;
};
