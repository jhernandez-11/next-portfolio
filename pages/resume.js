import react from "react";
import Layout from "../src/layout/layout";
import styles from '../styles/Home.module.css'

const resume = (props) => (
  <Layout>
    <object
        className={styles.resume}
      data="/resume.pdf"
      type="application/pdf"
    >
      <a href="/resume.pdf">Download resume</a>
    </object>
  </Layout>
);

export default resume;
