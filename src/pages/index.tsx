import Head from 'next/head';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { ChallengeBox } from "../components/ChallengeBox";
import { Profile } from "../components/Profile";


import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div className={styles.leftContainer}>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </div>
        <div className={styles.rightContainer}>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}