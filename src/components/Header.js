/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { Box, jsx } from 'theme-ui';

export default ({ siteMetadata }) => (
  <header>
    <Box py={2} px={3} sx={{ borderBottom: '1px solid', borderColor: 'gray' }}>
      <Link to="/" sx={{ fontWeight: 'bold', color: 'text', textDecoration: 'none' }}>
        {siteMetadata.title}
      </Link>
    </Box>
  </header>
);
