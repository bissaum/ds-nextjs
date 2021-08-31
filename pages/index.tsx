import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project sample by design system</title>
        <meta name="description" content="Project sample by design system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to design system
        </h1>

        <div className={styles.grid}>
          <Link href="/atoms">
            <a className={styles.card}>
              <h2>Atoms &rarr;</h2>
              <p>Atomic components</p>
            </a>
          </Link>

          <Link href="/atoms">
            <a className={styles.card}>
              <h2>Atoms &rarr;</h2>
              <p>Atomic components</p>
            </a>
          </Link>

          <Link href="/atoms">
            <a className={styles.card}>
              <h2>Atoms &rarr;</h2>
              <p>Atomic components</p>
            </a>
          </Link>

          <Link href="/atoms">
            <a className={styles.card}>
              <h2>Atoms &rarr;</h2>
              <p>Atomic components</p>
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

export default Home
