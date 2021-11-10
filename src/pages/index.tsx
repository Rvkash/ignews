import  Head from 'next/head'

import styles from './home.module.scss'


export default function Home() {
  return (
  <>
    <Head>
      <title> Home | ig.news </title>
    </Head>

    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span> Hey, Welcome! </span>
        <h1>News about the <span>React</span>world.</h1>
        <p>
          Get access to the all publication <br />
          <span>for $9,99 Month</span>
        </p>
      </section>

      <img src="/images/avatar.svg" alt="Girl coding" />
    </main>
  </>
  )
}
