import react from "react";
import Layout from "../src/layout/layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const uxUi = (props) => (
  <Layout>
    <div className={styles.xi}>
      <h2>UX / UI</h2>
      <h3>Problem</h3>
      <div className={styles.projCont}>
        <object
          className={styles.resume}
          data="/ux_ui/problem.pdf"
          type="application/pdf"
        >
          <a href="/ux_ui/problem.pdf">Download</a>
        </object>
      </div>

      <h3>Proposal</h3>
      <div className={styles.projCont}>
        <object
          className={styles.resume}
          data="/ux_ui/proposal.pdf"
          type="application/pdf"
        >
          <a href="/ux_ui/proposal.pdf">Download</a>
        </object>
      </div>
  
      <h3>Brand</h3>
      <div className={styles.projCont}>
        <object
          className={styles.resume}
          data="/ux_ui/moodboard.pdf"
          type="application/pdf"
        >
          <a href="/ux_ui/moodboard.pdf">Download</a>
        </object>
      </div>

      <h3>User</h3>
      <div className={styles.projCont}>
        <object
          className={styles.resume}
          data="/ux_ui/persona-1.pdf"
          type="application/pdf"
        >
          <a href="/ux_ui/persona-1.pdf">Download</a>
        </object>
        <object
          className={styles.resume}
          data="/ux_ui/persona-2.pdf"
          type="application/pdf"
        >
          <a href="/ux_ui/persona-2.pdf">Download</a>
        </object>
      </div>

      <h3>Flow</h3>
      <div className={styles.image}>
        <Image src="/ux_ui/flow.png" layout="responsive" height="593" width="694" alt="user-flow"></Image>
      </div>
      
      <h3>Site Map</h3>
      <div className={styles.projCont}>
        <object
          className={styles.resume}
          data="/ux_ui/site-map.pdf"
          type="application/pdf"
        >
          <a href="/ux_ui/site-map.pdf">Download</a>
        </object>
      </div>

      <h3>Render</h3>
      <div className={styles.image}>
        <Image src="/ux_ui/render.png" layout="responsive" height="660" width="510" alt="render"></Image>
      </div>

      <h3>XD Prototype</h3>
      <div className={styles.projCont}>
        <iframe src="https://jhernandez-11.github.io/Cosmic-Guide/" className={styles.pt}></iframe>
        <a
          href="https://jhernandez-11.github.io/Cosmic-Guide/"
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

export default uxUi;
