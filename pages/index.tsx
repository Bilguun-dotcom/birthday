import Head from "next/head";
import styles from "../styles/Home.module.css";
import Counter from "./components/counter";
import Header from "./components/header";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our journey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>We've been a couple for</h1>
        <Counter />
      </main>

      <footer className={styles.footer}>Made by Your Prince 👑</footer>
    </div>
  );
}
