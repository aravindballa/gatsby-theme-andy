import React from "react";
import { Link } from "gatsby";

const AnchorTag = ({ href, ...restProps }) => {
  const tooltipRef = React.useRef(null);

  const showTooltip = (e) => {
    tooltipRef.current = document.getElementById(href.replace(/^\//, ""));
    if (tooltipRef.current) {
      const { right, top, height } = e.target.getBoundingClientRect();
      const tooltipHeight = 150;
      tooltipRef.current.style.top =
        top + height / 2 - tooltipHeight / 2 + "px";
      tooltipRef.current.style.left = right + 8 + "px";
      tooltipRef.current.style.display = "block";
    }
  };
  const hideTooltip = (e) => {
    if (tooltipRef.current) {
      tooltipRef.current.style.display = "none";
    }
  };
  if (!href.match(/^http/))
    return (
      <Link
        {...restProps}
        to={href}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      />
    );
  return <a {...restProps} href={href} />;
};

export default {
  a: AnchorTag,
};
