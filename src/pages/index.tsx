import Head from 'next/head';
import {GetServerSideProps} from 'next';


import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { ChallengeBox } from "../components/ChallengeBox";
import { Profile } from "../components/Profile";


import styles from '../styles/pages/Home.module.css';
import {CountDownProvider} from "../contexts/CountDownContext";
import {ChallengesProvider} from "../contexts/ChallengesContext";
import {AsideNavigation} from "../components/AsideNavigation";

interface HomeProps {
	level: number,
	currentExperience: number
	challengesCompleted: number
}

export default function Home(props: HomeProps) {
	return (
		<ChallengesProvider
			level={props.level}
			currentExperience={props.currentExperience}
			challengesCompleted={props.challengesCompleted}
		>
			<Head>
				<title>Início | move.it</title>
			</Head>

			<main className={styles.main}>
				<aside>
					<AsideNavigation />
				</aside>
				<article className={styles.container}>
					<ExperienceBar />

					<CountDownProvider>
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
					</CountDownProvider>
				</article>
			</main>
		</ChallengesProvider>
	)
}

// tudo que está dentro dessa função executa no servidor Node
export const getServerSideProps: GetServerSideProps = async (ctx) => {
	// aqui pode ser feito uma chamada api para buscar algum tipo de dado

	const  {level, currentExperience, challengesCompleted} = ctx.req.cookies;

	return {
		props: {
			level: Number(level),
			currentExperience: Number(currentExperience),
			challengesCompleted: Number(challengesCompleted)
		}
	}
}