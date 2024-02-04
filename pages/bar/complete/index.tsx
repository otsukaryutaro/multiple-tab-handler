import Link from 'next/link';
import { formInputState } from '../../../atoms/form-input';
import { useResetRecoilState } from 'recoil';
import { useEffect } from 'react';

export default function BarCompletePage() {
  // FIXME: ここでglobalに保存していた値をクリアする？よくわからない
  const resetFormInputState = useResetRecoilState(formInputState);

  useEffect(() => {
    resetFormInputState();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Bar complete page!</h1>
      <Link href="/bar">Bar page</Link>
    </div>
  );
}
