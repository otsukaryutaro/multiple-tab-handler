import type { AppProps } from 'next/app';
import { ErrorBoundary } from 'react-error-boundary';

export default function App({ Component, pageProps }: AppProps) {
  // FIXME: throwしたエラーをキャッチする方法をちゃんと確認する

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
