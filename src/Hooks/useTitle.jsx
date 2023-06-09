import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - dragon News`;
  }, [title]);
};
export default useTitle;
