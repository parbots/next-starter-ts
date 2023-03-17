
import Head from 'next/head'

import styles from '@/styles/HomePage.module.css'

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Next.js Typescript Starter Template</title>
                <meta name='description' content='A Next.js starter template generated with create-next-app.' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Next.js Typescript Starter Template</h1>
            </main>
        </>
    );
};
