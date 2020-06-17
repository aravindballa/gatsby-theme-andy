/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { Text, Box, jsx, Styled } from 'theme-ui';

export default ({ siteMetadata }) => (
  <header>
    <Box py={2} px={3} sx={{ borderBottom: '1px solid', borderColor: 'gray' }}>
      <Link to="/">
        <Styled.a sx={{ fontWeight: 'bold', color: 'text' }}>{siteMetadata.title}</Styled.a>
      </Link>
    </Box>
  </header>
);
