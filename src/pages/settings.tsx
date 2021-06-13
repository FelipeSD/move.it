import Head from "next/head";
import {GetServerSideProps, GetServerSidePropsContext} from "next";

import {SettingsForm} from "../components/SettingsForm";

import styles from '../styles/pages/Settings.module.css';

interface SettingsProps {
	name: string;
	url: string;
	defaultTime: number;
}

export default function Settings(props: SettingsProps){
	return (
		<main className={styles.main}>
			<Head>
				<title>Configurações | move.it</title>
			</Head>
			<article className={styles.container}>
				<section className={styles.card}>
					<div className={styles.cardHeader}>
						<h1>Configurações</h1>
					</div>
					<div className={styles.cardBody}>
						<SettingsForm />
					</div>
				</section>
			</article>
		</main>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
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