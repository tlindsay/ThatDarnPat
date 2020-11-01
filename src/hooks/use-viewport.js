import { useEffect, useState } from 'react';

const isRenderingOnServer = typeof window === 'undefined';

const getInitialWidth = () => isRenderingOnServer ? 0 : document.documentElement.clientWidth;
const getInitialHeight = () => isRenderingOnServer ? 0 : document.documentElement.clientHeight;

const useViewport = () => {
  const [width, setWidth] = useState(getInitialWidth);
  const [height, setHeight] = useState(getInitialHeight);

  useEffect(() => {
    const listener = window.addEventListener('resize', () => {
      setWidth(document.documentElement.clientWidth);
      setHeight(document.documentElement.clientHeight);
    });

    return () => window.removeEventListener('resize', listener);

  }, []);

  return { width, height };
};

export default useViewport;
