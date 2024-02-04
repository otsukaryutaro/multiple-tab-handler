import Link from 'next/link';

export default function Page() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Hello, Next.js!</h1>
      <Link href="/bar">Bar page</Link>
      <Link href="/foo">Foo page</Link>
    </div>
  );
}
