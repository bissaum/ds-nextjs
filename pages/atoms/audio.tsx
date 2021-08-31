import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import SayHello from 'ds-package'
import { Component } from 'react'

class Atoms extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Audio by design system</title>
          <meta name="description" content="Audio by design system" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <SayHello name="Robson" />
          </h1>

          <div className={styles.grid}>
            Audio
          </div>
        </main>

        <footer className={styles.footer}>
          &copy; 2021 - Design system
        </footer>
      </div>
    )
  }
}

export default Atoms
