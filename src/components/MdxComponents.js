import React from 'react';
import { LinkToStacked } from 'react-stacked-pages-hook';

import Tippy from './Tippy';

const AnchorTag = ({ href, popups = {}, ...restProps }) => {
  href = href || restProps.to;
  if (!href.match(/^http/)) {
    const Popup = popups[href.replace(/^\//, '')];
    return (
      <Tippy content={Popup}>
        <LinkToStacked {...restProps} to={href} />
      </Tippy>
    );
  }
  return <a {...restProps} href={href} />;
};

export default {
  a: AnchorTag,
};
