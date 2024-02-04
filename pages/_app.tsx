import type { AppProps } from 'next/app';
import { ErrorBoundary } from 'react-error-boundary';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  // FIXME: throwしたエラーをキャッチする方法をちゃんと確認する
  // 朴木さんはちゃんとuseHandlerError使ってたけどうまくいってるのかな？

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ErrorBoundary>
  );
}
