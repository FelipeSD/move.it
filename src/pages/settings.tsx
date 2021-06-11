import Head from "next/head";
import {GetServerSideProps, GetStaticProps, GetStaticPropsContext} from "next";

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

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {

	return {
		props: {

		}
	}
}