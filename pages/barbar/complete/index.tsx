import Link from 'next/link';
import { formInputState } from '../../../atoms/form-input';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useSingleTabCompleteEasy } from '../../../hooks/use-single-tab-complete-easy';

export default function BarBarCompletePage() {
  useSingleTabCompleteEasy();
  const data = useRecoilValue(formInputState);
  // FIXME: ここでglobalに保存していた値をクリアする？よくわからない
  // const resetFormInputState = useResetRecoilState(formInputState);

  // useEffect(() => {
  //   resetFormInputState();
  // }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>BarBar complete page!</h1>
      <p>JSON: {data ? JSON.stringify(data) : 'no data'}</p>
      <Link href="/barbar">BarBar page</Link>
    </div>
  );
}
