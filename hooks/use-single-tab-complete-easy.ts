import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useSingleTabCompleteEasy = () => {
  const router = useRouter();
  useEffect(() => {
    const handler = async (event) => {
      event.preventDefault();
      event.returnValue = '';
      await router.push('/');
    };
    window.addEventListener('beforeunload', handler);
    return () => {
      window.removeEventListener('beforeunload', handler);
    };
  }, [router]);
};
