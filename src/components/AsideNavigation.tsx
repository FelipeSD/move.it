import styles from '../styles/components/AsideNavigation.module.css';

export function AsideNavigation(){
	return (
		<nav className={styles.navbarContainer}>
			<img src="logo-short.svg" alt="logo" />
			<ul>
				<li>
					<a href="/">
						<img src="icons/home.svg" alt="home" />
					</a>
				</li>
				<li>
					<a href="/settings">
						<img src="icons/cog.svg" alt="cog" />
					</a>
				</li>
			</ul>
		</nav>
	)
}