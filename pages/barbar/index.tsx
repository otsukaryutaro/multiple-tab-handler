import Link from 'next/link';

export default function BarBarPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>BarBar page!</h1>
      <Link href="/barbar/create">Bar create page</Link>
      <Link href="/barbar/edit/1">Bar edit page</Link>
    </div>
  );
}
