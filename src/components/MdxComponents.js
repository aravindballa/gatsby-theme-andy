/** @jsx jsx */
import React from 'react';
import { LinkToStacked } from './CustomLinkToStacked';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

import Tippy from './Tippy';

const AnchorTag = ({ href, popups = {}, noPopups = false, ...restProps }) => {
  if (!href) href = restProps.to;
  if (!href.match(/^http/))
    return noPopups ? (
      <Link {...restProps} to={href} sx={{ variant: 'links.internal' }} />
    ) : (
      <Tippy content={popups[href.replace(/^\//, '')]} placement="right" animation="shift-away">
        <LinkToStacked {...restProps} to={href} sx={{ variant: 'links.internal' }} />
      </Tippy>
    );
  return <a {...restProps} href={href} />;
};

export default {
  a: AnchorTag,
};
