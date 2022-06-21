import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../src/layout/layout";

const home = (props) => (
  <Layout>
    <div className={styles.grid}>
      <div className={styles.card}>
        <Link href="/front_end">
          <div>
            <h2>Web Development &rarr;</h2>
            <p>
              Discover my familiarity with front end to back end development.
            </p>
          </div>
        </Link>
      </div>

      <div className={styles.card}>
        <Link href="/ux_ui">
          <div>
            <h2>UX / UI &rarr;</h2>
            <p>View my process for designing modern applications.</p>
          </div>
        </Link>
      </div>

      <div className={styles.card}>
        <Link href="/resume">
          <div>
            <h2>Resume &rarr;</h2>
            <p>Check out my experience and skill sets.</p>
          </div>
        </Link>
      </div>

      <a
        href="mailto:jhernandez11@protonmail.com"
        target="_blank"
        rel="noreferrer"
        className={styles.card}
      >
        <h2>Contact &rarr;</h2>
        <p>Send me an email!</p>
      </a>
    </div>
  </Layout>
);

export default home;
