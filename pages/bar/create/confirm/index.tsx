import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { formInputState } from '../../../../atoms/form-input';
import { useRouter } from 'next/router';
import { useSingleTab } from '../../../../hooks/use-single-tab';

export default function BarCreateConfirm() {
  useSingleTab();
  const router = useRouter();
  const data = useRecoilValue(formInputState);

  const handleConfirm = () => {
    console.log({ data });
    router.push('/bar/complete');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Bar create confirm page!</h1>
      <p>JSON: {JSON.stringify(data)}</p>
      <button type="button" onClick={handleConfirm}>
        Bar complete page
      </button>
      <Link href="/bar">Bar page</Link>
    </div>
  );
}
