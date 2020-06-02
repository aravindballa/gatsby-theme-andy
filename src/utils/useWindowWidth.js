import React from 'react';

const getWindowWidth = () => {
  return typeof window === 'undefined' ? undefined : window.innerWidth;
};

export default () => {
  const [width, setWidth] = React.useState(getWindowWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(getWindowWidth());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [width];
};
