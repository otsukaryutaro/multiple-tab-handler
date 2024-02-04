import { useEffect, useRef } from 'react';

// 完了画面で、新規登録・編集、確認画面および同じページを複数開かないようにする
export const useSingleTabComplete = () => {
  // 初期表示が成功したかをフラグで管理
  const flag = useRef(false);

  useEffect(() => {
    const tabState = localStorage.getItem('tabState');

    if (tabState !== 'confirm') {
      throw new Error('Same page');
    }

    localStorage.removeItem('tabState');
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
};
