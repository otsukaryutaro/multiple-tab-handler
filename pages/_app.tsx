import type { AppProps } from 'next/app';
import { ErrorBoundary } from 'react-error-boundary';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
