import Head from 'next/head';
import {GetServerSideProps, GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext} from 'next';


import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { ChallengeBox } from "../components/ChallengeBox";
import { Profile } from "../components/Profile";


import styles from '../styles/pages/Home.module.css';
import {CountDownProvider} from "../contexts/CountDownContext";
import {AsideNavigation} from "../components/AsideNavigation";

interface HomeProps {
	name: string,
	url: string,
	level: number,
	defaultTime: number,
	currentExperience: number
	challengesCompleted: number
}

export default function Home(props: HomeProps) {
	return (
		<main className={styles.main}>
			<Head>
				<title>Início | move.it</title>
			</Head>
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
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
	// aqui pode ser feito uma chamada api para buscar algum tipo de dado
	const  {
		name,
		url,
		level,
		defaultTime,
		currentExperience,
		challengesCompleted
	} = ctx.req.cookies;

	return {
		props: {
			"name": name || null,
			"url": url || null,
			level: Number(level),
			defaultTime: Number(defaultTime),
			currentExperience: Number(currentExperience),
			challengesCompleted: Number(challengesCompleted)
		}
	}
}