import { NextPage } from 'next';
import Link from 'next/link';
import styles from './home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <section className={styles.media_container}>
        <video
          src="/video/main_full.mp4"
          autoPlay
          muted
          loop
          className={styles.main_full}
          width="100%"
          height="100%"
        />
        <video
          src="/video/main_square (online-video-cutter.com).mp4"
          autoPlay
          muted
          loop
          className={styles.main_square}
          width="100%"
        />
        <div className={styles.info}>
          <h2>Best prices for mining equipment in the USA</h2>
          <p>
            Many years of contracts with the leading manufacturers of mining equipment allow us to
            give you the most favorable conditions. Our own data center, more than 500,000 devices
            brought in, more than 100,000 satisfied customers.
          </p>
          <div className={styles.links}>
            <Link href="#">ACIS miners</Link>
            <Link href="#">Data Center</Link>
            <Link href="#">Containers</Link>
            <Link href="#">Turnkey Mining</Link>
          </div>
        </div>
      </section>
      <section>
        <h2>Test</h2>
      </section>
    </>
  );
};

export default Home;
