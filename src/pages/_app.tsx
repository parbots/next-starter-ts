
import type { AppProps } from 'next/app'

import '@/styles/reset.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Component {...pageProps} />
    );
};
