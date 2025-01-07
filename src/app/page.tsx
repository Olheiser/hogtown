import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import logo from "../../public/hogtown-logo.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hogtown Construction Advisors</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.pageContainer}>
        <video className={styles.video} src="/hogtown-video.mp4" autoPlay loop muted />
        <div className={styles.content}>
          <Image
            src={logo}
            alt="Hogtown Construction Advisors Logo"
            width={500}
            height={500}
            className={styles.hogtownLogo}
          />
          <div className={styles.headingContainer}>
            <h1 className={styles.hogtownTitle}>Hogtown</h1>
            <h2 className={styles.hogtownSubtitle}>Construction Advisors</h2>
            <h2 className={styles.comingSoon}>-------- Coming Soon --------</h2>
          </div>
        </div>
      </div>
    </>
  );
}