import Link from 'next/link';
import { formInputState } from '../../../atoms/form-input';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { useSingleTabComplete } from '../../../hooks/use-single-tab-complete';

export default function BarCompletePage() {
  useSingleTabComplete();
  const data = useRecoilValue(formInputState);
  // FIXME: ここでglobalに保存していた値をクリアする？よくわからない
  const resetFormInputState = useResetRecoilState(formInputState);

  useEffect(() => {
    resetFormInputState();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Bar complete page!</h1>
      <p>JSON: {data ? JSON.stringify(data) : 'no data'}</p>
      <Link href="/bar">Bar page</Link>
    </div>
  );
}
