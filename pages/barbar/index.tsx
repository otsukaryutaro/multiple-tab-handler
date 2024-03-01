import Link from 'next/link';
import { useEffect, useId } from 'react';
import { useSetRecoilState } from 'recoil';
import { sessionKey } from '../../atoms/unique-session-key';

export default function BarBarPage() {
  // sessionKeyの代わりに、ユニークなIDを格納
  const id = useId();
  const setSessionKey = useSetRecoilState(sessionKey);
  useEffect(() => {
    setSessionKey(id);
    console.log({id})
  },[])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>BarBar page!</h1>
      <Link href="/barbar/create">Bar create page</Link>
      <Link href="/barbar/edit/1">Bar edit page</Link>
    </div>
  );
}
