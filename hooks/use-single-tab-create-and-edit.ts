import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

// 新規作成や編集画面で、同じページを複数開かないようにする
export const useSingleTabCreateAndEdit = (forwardTo: string) => {
  const router = useRouter();
  // 初期表示が成功したかをフラグで管理
  const flag = useRef(false);

  useEffect(() => {
    const tabState = localStorage.getItem('tabState');

    if (tabState) {
      throw new Error('Same page');
    }

    localStorage.setItem('tabState', 'input');
    // 初期表示が成功
    flag.current = true;
  }, []);

  useEffect(() => {
    const handler = () => {
      // リロードやタブを閉じるときに実行される
      // ただし、初期表示で失敗した場合は実行されない
      if (flag.current) {
        localStorage.removeItem('tabState');
      }
    };
    window.addEventListener('beforeunload', handler);
    return () => {
      window.removeEventListener('beforeunload', handler);
    };
  }, []);

  // router.pushで遷移時に実行し、confirm画面への遷移以外ではtabStateを削除する 
  useEffect(() => {
    const handler = (nextUrl: string) => {
      if (nextUrl !== forwardTo) localStorage.removeItem('tabState');
    };

    router.events.on('routeChangeStart', (nextUrl) => handler(nextUrl));

    return () => {
      router.events.off('routeChangeStart', (nextUrl) => handler(nextUrl));
    };
  }, []);
};
