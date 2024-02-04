import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

// 確認画面で、新規登録・編集および同じページを複数開かないようにする
export const useSingleTabConfirm = (nextUrl: string) => {
  const router = useRouter();
  // 初期表示が成功したかをフラグで管理
  const flag = useRef(false);

  useEffect(() => {
    const tabState = localStorage.getItem('tabState');

    if (tabState !== 'input') {
      throw new Error('Same page');
    }

    localStorage.setItem('tabState', 'confirm');
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

  // router.pushで遷移時に実行し、input画面への遷移だった場合ははtabStateをinputに戻す
  useEffect(() => {
    const handler = (url: string) => {
      // completeに進むときだけはエラーにしない
      if (url !== nextUrl) {
        localStorage.removeItem('tabState');
      }
    };

    router.events.on('routeChangeStart', (url) => handler(url));

    return () => {
      router.events.off('routeChangeStart', (url) => handler(url));
    };
  }, []);
};
