import Link from 'next/link';

export default function BarCreate() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Bar create page!</h1>
      {/* // TODO: フォームでの遷移にする */}
      <Link href="/bar/create/confirm">Bar create confirm page</Link>
      <Link href="/bar">Bar page</Link>
    </div>
  );
}
