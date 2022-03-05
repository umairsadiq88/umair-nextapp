import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css";
import Image from "next/image";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>About Page </title>
      </Head>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 className={styles.mainHeading}>Hello World my about </h1>
        <Image
          src="https://images.pexels.com/photos/11076738/pexels-photo-11076738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          width="700"
          height="650"
          alt="aboutImage"></Image>
      </div>
    </>
  );
};

export default about;