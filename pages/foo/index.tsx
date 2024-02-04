import Link from "next/link";

export default function FooPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>FooPage!</h1>
      <Link href="/foo/create">Foo create page</Link>
      <Link href="/foo/edit/1">Foo edit page</Link>
    </div>
  );
  }