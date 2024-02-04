import Link from 'next/link';

export default function BarCompletePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Bar complete page!</h1>
      <Link href="/bar">Bar page</Link>
    </div>
  );
}
