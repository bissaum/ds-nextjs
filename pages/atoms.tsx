import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Atoms: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Atoms by design system</title>
        <meta name="description" content="Atoms by design system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Design system &raquo; Atoms
        </h1>

        <div className={styles.grid}>
          <Link href="/atoms/audio">
            <a className={styles.card}>
              <h2>Audio &rarr;</h2>
              <p>Web player component</p>
            </a>
          </Link>

          <Link href="/atoms/audio">
            <a className={styles.card}>
              <h2>Audio &rarr;</h2>
              <p>Web player component</p>
            </a>
          </Link>

          <Link href="/atoms/audio">
            <a className={styles.card}>
              <h2>Audio &rarr;</h2>
              <p>Web player component</p>
            </a>
          </Link>

          <Link href="/atoms/audio">
            <a className={styles.card}>
              <h2>Audio &rarr;</h2>
              <p>Web player component</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; 2021 - Design system
      </footer>
    </div>
  )
}

export default Atoms
