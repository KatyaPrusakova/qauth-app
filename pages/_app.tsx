import "@/styles/globals.css";
import type { AppProps } from 'next/app';
import { QClient } from '@quorini/core';
import { QAuth } from '@quorini/ui-react';
import * as queries from './src/quorini-queries'
import * as mutations from './src/quorini-mutations'

QClient.configure({
  projectId: "67876a6c128204e10303d9b6",
  env: "development",
  gqlPaths: {
    queries,
    mutations,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QAuth.Provider>
      <Component {...pageProps} />
    </QAuth.Provider>
  );
}
