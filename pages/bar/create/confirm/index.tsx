import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { formInputState } from '../../../../atoms/form-input';

export default function BarCreateConfirm() {
  const data = useRecoilValue(formInputState);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Bar create confirm page!</h1>
      <p>{JSON.stringify(data)}</p>
      <Link href="/bar/complete">Bar complete</Link>
      <Link href="/bar">Bar page</Link>
    </div>
  );
}
