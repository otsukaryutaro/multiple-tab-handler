import { useEffect, useRef } from 'react';

// 新規作成や編集画面で、同じページを複数開かないようにする
export const useSingleTabCreateAndEdit = () => {
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

    return () => {
      localStorage.removeItem('tabState');
    };
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
};
