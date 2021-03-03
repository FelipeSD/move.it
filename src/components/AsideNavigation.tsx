import styles from '../styles/components/AsideNavigation.module.css';
import {useEffect, useState} from "react";

export function AsideNavigation(){
	const [isOpen, setIsOpen] = useState(false);

	return (
		<aside className={styles.asideContainer}>
			<button className={styles.hamburger} onClick={()=>setIsOpen(!isOpen)}>
				<img src="icons/hamburger.svg" alt="hamburger" />
			</button>
			<nav
				className={styles.navbarContainer}
				style={isOpen ? {marginLeft: "unset"} : {marginLeft: "-112px"}}
			>
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
		</aside>
	)
}