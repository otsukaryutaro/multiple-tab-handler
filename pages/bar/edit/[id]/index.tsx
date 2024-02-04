import Link from 'next/link';

export default function BarEditPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Bar edit page!</h1>
      {/* // TODO: フォームでの遷移にする */}
      <Link href="/bar/edit/confirm/1">Bar edit confirm page</Link>
      <Link href="/bar">Bar page</Link>
    </div>
  );
}
