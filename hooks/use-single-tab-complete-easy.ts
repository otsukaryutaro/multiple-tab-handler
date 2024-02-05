import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useSingleTabCompleteEasy = () => {
  const router = useRouter();
  useEffect(() => {
    const handler = async () => {
      alert('You are leaving the page');
      await router.push('/barbar');
    };
    window.addEventListener('beforeunload', handler);
    return () => {
      window.removeEventListener('beforeunload', handler);
    };
  }, []);
};
