import { useEffect, useState } from 'react';

const useGetWidth = (ref) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(ref.current.offsetWidth);
    };

    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref.current]);

  return width;
};

export default useGetWidth;
