import { Router, useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

// 確認画面で、新規登録・編集および同じページを複数開かないようにする
export const useSingleTabConfirm = (forwardTo: string) => {
  const router = useRouter();
  // 初期表示が成功したかをフラグで管理
  const flag = useRef(false);

  useEffect(() => {
    /* ==========================
      localStorageをチェックして、エラーじゃなければtabStateを更新する
    ============================ */
    const tabState = localStorage.getItem('tabState');
    console.log({ tabState });

    if (tabState !== 'input') {
      throw new Error('Same page');
    }

    localStorage.setItem('tabState', 'confirm');
    // 初期表示が成功
    flag.current = true;

    /* ==========================
      リロードやタブを閉じるときに実行される
      ただし、初期表示で失敗した場合は実行されない
    ============================ */
    const handler = () => {
      if (flag.current) {
        localStorage.removeItem('tabState');
      }
    };
    window.addEventListener('beforeunload', handler);

    /* ==========================
      router.pushで遷移時に実行し、complete画面への遷移以外ではtabStateを削除する
    ============================ */
    const routeHandler = (nextUrl: string) => {
      console.log('confirm before if');
      // completeに進むときだけはエラーにしない
      if (nextUrl === forwardTo) return;
      console.log('confirm after if');

      localStorage.removeItem('tabState');
    };

    router.events.on('routeChangeStart', routeHandler);

    return () => {
      window.removeEventListener('beforeunload', handler);

      router.events.off('routeChangeStart', routeHandler);
    };
  }, []);
};
