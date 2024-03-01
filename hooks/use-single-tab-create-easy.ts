import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { sessionKey } from '../atoms/unique-session-key';

export const useSingleTabCreateEasy = () => {
  const globalSessionKey = useRecoilValue(sessionKey);
  // 初期表示が成功したかをフラグで管理
  const flag = useRef(false);
  useEffect(() => {
    const storedKey = localStorage.getItem('unique-session-key');

    if (storedKey == null) {
      localStorage.setItem('unique-session-key', globalSessionKey);
      // 初期表示が成功
      flag.current = true;
      return;
    }

    if (storedKey !== globalSessionKey) {
      throw new Error('Same page');
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      // リロードやタブを閉じるときに実行される
      // ただし、初期表示で失敗した場合は実行されない
      if (flag.current) {
        localStorage.removeItem('unique-session-key');
      }
    };
    window.addEventListener('beforeunload', handler);
    return () => {
      window.removeEventListener('beforeunload', handler);
    };
  }, []);
};
