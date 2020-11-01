import { useEffect, useState } from 'react';

const useViewport = () => {
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  const [height, setHeight] = useState(document.documentElement.clientHeight);

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
