import { useEffect, useRef } from 'react';

export const useSingleTab = () => {
  // 初期表示が成功したかをフラグで管理
  const flag = useRef(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const storedPath = localStorage.getItem('storedPath');

    console.log({ currentPath, storedPath });

    if (storedPath === currentPath) {
      throw new Error('Same page');
    }

    localStorage.setItem('storedPath', currentPath);
    // 初期表示が成功
    flag.current = true;

    return () => {
      localStorage.removeItem('storedPath');
    };
  }, []);

  useEffect(() => {
    const handler = () => {
      // リロードやタブを閉じるときに実行される
      // ただし、初期表示で失敗した場合は実行されない
      if (flag.current) {
        localStorage.removeItem('storedPath');
      }
    };
    window.addEventListener('beforeunload', handler);
    return () => {
      window.removeEventListener('beforeunload', handler);
    };
  }, []);
};
