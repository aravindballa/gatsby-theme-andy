import React from "react";
import { Link } from "gatsby";
import Tippy from "@tippyjs/react";

const AnchorTag = ({ href, popups = {}, ...restProps }) => {
  href = href || restProps.to;
  if (!href.match(/^http/)) {
    const Popup = popups[href.replace(/^\//, "")];
    return (
      <Tippy content={Popup} placement="top" animation="slide-away">
        <Link {...restProps} to={href} />
      </Tippy>
    );
  }
  return <a {...restProps} href={href} />;
};

export default {
  a: AnchorTag,
};
