import { useEffect, useRef } from 'react';

export const useSingleTabConfirmEasy = () => {
  // 初期表示が成功したかをフラグで管理
  const flag = useRef(false);
  useEffect(() => {
    const storedPath = localStorage.getItem('isConfirm');

    if (storedPath === 'true') {
      throw new Error('Same page');
    }

    localStorage.setItem('isConfirm', 'true');
    // 初期表示が成功
    flag.current = true;

    return () => {
      localStorage.removeItem('isConfirm');
    };
  }, []);

  useEffect(() => {
    const handler = () => {
      // リロードやタブを閉じるときに実行される
      // ただし、初期表示で失敗した場合は実行されない
      if (flag.current) {
        localStorage.removeItem('isConfirm');
      }
    };
    window.addEventListener('beforeunload', handler);
    return () => {
      window.removeEventListener('beforeunload', handler);
    };
  }, []);
};
