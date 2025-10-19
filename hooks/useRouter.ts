
import { useState, useEffect } from 'react';

interface RouterState {
  page: string;
  params: string[];
}

export const useRouter = (): RouterState => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const pathParts = hash.slice(2).split('/'); // Remove #/
  const page = pathParts[0] || 'home';
  const params = pathParts.slice(1);

  return { page, params };
};
