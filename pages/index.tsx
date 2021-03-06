import { Character, characterMapper } from '../lib/rickandmorty';

import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [data, setData] = React.useState<Character>();

  React.useEffect(() => {
    (async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character/2');
      const body = await response.json();
      setData(characterMapper(body));
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-4xl">Rick and Morty</h1>
        <Link href="/ssg/characters">
          <a className="underline hover:text-red-400">Static Site Generator</a>
        </Link>

        <Link href="/ssr/characters">
          <a className="underline hover:text-red-400">Server Side Render</a>
        </Link>

        <Link href="/api/characters/1">
          <a className="underline hover:text-red-400">API Characters</a>
        </Link>

        <Link href="/api/character/1">
          <a className="underline hover:text-red-400">API Character</a>
        </Link>

        {data && <div id="data">Data: {JSON.stringify(data)}</div>}
      </main>
    </div>
  );
}
