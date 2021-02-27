import Head from "next/head";
import {GetServerSideProps} from "next";

import {AsideNavigation} from "../components/AsideNavigation";
import {SettingsForm} from "../components/SettingsForm";
import {ChallengesProvider} from "../contexts/ChallengesContext";

import styles from '../styles/pages/Settings.module.css';

interface SettingsProps {
	name: string;
	url: string;
	defaultTime: number;
}

export default function Settings(props: SettingsProps){
	return (
		<ChallengesProvider
			name={props.name}
			url={props.url}
			defaultTime={props.defaultTime}
		>
			<Head>
				<title>Configurações | move.it</title>
			</Head>
			<main className={styles.main}>
				<aside>
					<AsideNavigation />
				</aside>
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
		</ChallengesProvider>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const  {
		name,
		url,
		defaultTime
	} = ctx.req.cookies;

	return {
		props: {
			"name": name,
			"url": url,
			"defaultTime": Number(defaultTime)
		}
	}
}