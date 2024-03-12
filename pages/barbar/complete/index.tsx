import { getCookie, deleteCookie } from 'cookies-next';
import Link from 'next/link';
import { formInputState } from '../../../atoms/form-input';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useEffect } from 'react';

export default function BarBarCompletePage() {
  const data = useRecoilValue(formInputState);
  // FIXME: ここでglobalに保存していた値をクリアする？よくわからない
  const resetFormInputState = useResetRecoilState(formInputState);

  if (data === undefined) {
    throw Error('resetFormInputState is undefined');
  }

  useEffect(() => {
    const storedKey = getCookie('unique-session-key');

    if (storedKey == null) {
      throw new Error('Same page');
    }

    if (storedKey) {
      deleteCookie('unique-session-key');
    }

    return () => {
      // ページから移動するときにdataを空にする
      resetFormInputState();
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>BarBar complete page!</h1>
      <p>JSON: {data ? JSON.stringify(data) : 'no data'}</p>
      <Link href="/barbar">BarBar page</Link>
    </div>
  );
}
