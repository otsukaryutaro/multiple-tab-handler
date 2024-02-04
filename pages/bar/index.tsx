import Link from 'next/link';

export default function BarPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Bar page!</h1>
      <Link href="/bar/create">Bar create page</Link>
      <Link href="/bar/edit/1">Bar edit page</Link>
    </div>
  );
}
