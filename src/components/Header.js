import React from 'react';
import { Link } from 'gatsby';

export default ({ siteMetadata }) => (
  <header>
    <div>
      <Link to="/">
        <p>{siteMetadata.title}</p>
      </Link>
    </div>
  </header>
);
