import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { formInputState } from '../../../../atoms/form-input';
import { useRouter } from 'next/router';
import { useSingleTabConfirmEasy } from '../../../../hooks/use-single-tab-confirm-easy';

export default function BarBarCreateConfirm() {
  useSingleTabConfirmEasy();
  const router = useRouter();
  const data = useRecoilValue(formInputState);



  if (data === undefined) {
    throw Error('resetFormInputState is undefined');
  }

  const handleConfirm = () => {
    console.log({ data });
    router.replace('/barbar/complete');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>BarBar create confirm page!</h1>
      <p>JSON: {JSON.stringify(data)}</p>
      <button type="button" onClick={handleConfirm}>
        BarBar complete page
      </button>
      <Link href="/barbar/create">Back to create page</Link>
      <Link href="/barbar">BarBar page</Link>
    </div>
  );
}
