import react from "react";
import Layout from "../src/layout/layout";
import styles from '../styles/Home.module.css';
import Image from "next/image";

const ga = (props) => (
  <Layout>
    <p className="logos">LOGOS</p>
    <Image className="right" src="/DESIGNTHREE.png" width={300} height={300} alt="design three"></Image>
    <Image src="/DESIGNFOUR.png" width={300} height={300} alt="design four"></Image>
    <Image src="/DESIGNSIX.png" width={300} height={300} alt="design six"></Image>
    <p className="logos">3D Models</p>
    <Image src="/still-life1.jpg" width={240} height={300} alt="still-life one"></Image>
    <Image src="/still-life2.png" width={240} height={300} alt="still-life two"></Image>
  </Layout>
);

export default ga;