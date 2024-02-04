import Link from 'next/link';

export default function BarCreateConfirm() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Bar create confirm page!</h1>
      <Link href="/bar/complete">Bar complete</Link>
      <Link href="/bar">Bar page</Link>
    </div>
  );
}
