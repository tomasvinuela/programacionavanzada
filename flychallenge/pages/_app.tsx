import type {AppProps} from "next/app";

import '../styles/globals.css';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/App.module.css";
import Link from "next/link";


function App({Component, pageProps}: AppProps) {
  return (
  <div className={styles.container}>
    <Head>
      <title>Flybondi!</title>
      <meta name="description" content="Tu aplicacion de viajes favorita" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to {" "}
        <Link href="/">
          Flybondi!
        </Link>
      </h1>

      <h1 className={styles.description}>
        Viajes seguros, directos y baratos, {" "} 
        <b>
          todo a un click de distancia
        </b>
      </h1>

      <Component {...pageProps} />
    </main>

    <footer className={styles.footer}>
      <a
        href="https://github.com/tomasvinuela/programacionavanzada.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made by {" "}
        <h3 className={styles.author}>
          Tomas Viñuela
        </h3>
      </a>
    </footer>
  </div>);
}

export default App;
