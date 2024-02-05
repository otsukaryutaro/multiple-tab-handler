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
    return () => {
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
