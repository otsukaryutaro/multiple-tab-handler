import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { sessionKey } from '../atoms/unique-session-key';
import { Router, useRouter } from 'next/router';

export const useSingleTabCreateEasy = () => {
  const globalSessionKey = useRecoilValue(sessionKey);
  const router = useRouter();
  // 初期表示が成功したかをフラグで管理
  const flag = useRef(false);
  useEffect(() => {
    const storedKey = getCookie('unique-session-key');

    // 初期描画時
    if (storedKey == null && globalSessionKey) {
      setCookie('unique-session-key', globalSessionKey);
      // 初期表示が成功
      flag.current = true;
      return;
    }

    if (storedKey !== globalSessionKey) {
      throw new Error('Same page');
    }
  }, []);

  useEffect(() => {
    // ブラウザバックの場合
    router.beforePopState(() => {
      console.log('beforePopState');
      if (flag.current) {
        deleteCookie('unique-session-key');
      }
      return true;
    });

    // リロードの場合
    const handler = () => {
      // リロードやタブを閉じるときに実行される
      // ただし、初期表示で失敗した場合は実行されない
      if (flag.current) {
        deleteCookie('unique-session-key');
      }
    };
    window.addEventListener('beforeunload', handler);
    return () => {
      window.removeEventListener('beforeunload', handler);
    };
  }, []);
};
