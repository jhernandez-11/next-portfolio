import react from "react";
import Layout from "../src/layout/layout";
import styles from "../styles/Home.module.css";

const webDev = (props) => (
  <Layout>
    <div>
      <h2>Personal Projects</h2>
      <div className={styles.projCont}>
        <iframe src="https://meta-banners.vercel.app/"></iframe>
        <a
          href="https://meta-banners.vercel.app/"
          className={styles.blank}
          target="_blank"
          rel="noreferrer"
        >
          Open in new tab &#x2197;
        </a>
      </div>
      <div className={styles.projCont}>
        <iframe src="https://jhernandez-11.github.io/Outerpage/"></iframe>
        <a
          href="https://jhernandez-11.github.io/Outerpage/"
          className={styles.blank}
          target="_blank"
          rel="noreferrer"
        >
          Open in new tab &#x2197;
        </a>
      </div>
      <div className={styles.projCont}>
        <iframe src="https://jhernandez-11.github.io/pixelmooncrypto/"></iframe>
        <a
          href="https://jhernandez-11.github.io/pixelmooncrypto/"
          className={styles.blank}
          target="_blank"
          rel="noreferrer"
        >
          Open in new tab &#x2197;
        </a>
      </div>
      <h2>Instructor Projects</h2>
      <div className={styles.projCont}>
        <iframe src="https://jhernandez-11.github.io/Natours/"></iframe>
        <a
          href="https://jhernandez-11.github.io/Natours/"
          className={styles.blank}
          target="_blank"
          rel="noreferrer"
        >
          Open in new tab &#x2197;
        </a>
      </div>
      <div className={styles.projCont}>
        <iframe src="https://jhernandez-11.github.io/Trillo/"></iframe>
        <a
          href="https://jhernandez-11.github.io/Trillo/"
          className={styles.blank}
          target="_blank"
          rel="noreferrer"
        >
          Open in new tab &#x2197;
        </a>
      </div>
      <div className={styles.projCont}>
        <iframe src="https://jhernandez-11.github.io/Nexter/"></iframe>
        <a
          href="https://jhernandez-11.github.io/Nexter/"
          className={styles.blank}
          target="_blank"
          rel="noreferrer"
        >
          Open in new tab &#x2197;
        </a>
      </div>
    </div>
  </Layout>
);

export default webDev;
