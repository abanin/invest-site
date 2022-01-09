import "invest-kit/lib/static/index.css";
import "invest-kit/lib/static/bundle.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
