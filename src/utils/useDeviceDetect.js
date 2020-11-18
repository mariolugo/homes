import { useState, useEffect } from 'react';

export default function useDeviceDetect() {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    //using window inside, SSR can use window only inside life cycle.
    function handleSizeChange() {
      return setIsMobile(window.innerWidth < 640);
    }

    window.addEventListener('resize', handleSizeChange);

    return () => {
      window.removeEventListener('resize', handleSizeChange);
    };
  }, [isMobile]);

  return { isMobile };
}
