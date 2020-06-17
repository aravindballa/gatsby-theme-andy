/** @jsx jsx */
import React from 'react';
import Tippy from '@tippyjs/react';
import { LinkToStacked } from 'react-stacked-pages-hook';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

// Animation styles are imported in `src/styles.css`

// TODO cmd+click open page in new tab

const innerLinkStyles = {
  px: '2px',
  mx: '-2px',
  borderRadius: 1,
  ':hover': {
    bg: 'accent',
  },
  ':focus': {
    bg: 'accent',
  },
};

const AnchorTag = ({ href, popups = {}, noPopups = false, ...restProps }) => {
  if (!href) href = restProps.to;
  if (!href.match(/^http/))
    return noPopups ? (
      <Link {...restProps} to={href} sx={innerLinkStyles} />
    ) : (
      <Tippy content={popups[href.replace(/^\//, '')]} placement="right" animation="shift-away">
        <LinkToStacked {...restProps} to={href} sx={innerLinkStyles} />
      </Tippy>
    );
  return <a {...restProps} href={href} />;
};

export default {
  a: AnchorTag,
};
