import styles from '../styles/components/AsideNavigation.module.css';
import {useState} from "react";
import Link from 'next/link';
import {useRouter} from "next/router";

interface ItemLinkProps {
	imageSrc: string,
	imageAlt: string,
	href: string,
}

function ItemLink({imageSrc, href, imageAlt}: ItemLinkProps): JSX.Element {
	const router = useRouter();

	return (
		<Link href={href}>
			<a className={router.route === href ? styles.active : ''}>
				<img src={imageSrc} alt={imageAlt} />
			</a>
		</Link>
	)
}

export function AsideNavigation(): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<aside className={styles.asideContainer}>
			<button className={styles.hamburger} onClick={()=>setIsOpen(!isOpen)}>
				<img src="icons/hamburger.svg" alt="hamburger" />
			</button>
			<nav className={styles.navbarContainer}
				style={isOpen ? {marginLeft: "unset"} : {marginLeft: "-112px"}}
			>
				<img src="logo-short.svg" alt="logo" />
				<ul>
					<li>
						<ItemLink
							href={"/"}
							imageSrc={"icons/home.svg"}
							imageAlt={"home"}/>
					</li>
					<li>
						<ItemLink
							href={"/settings"}
							imageSrc={"icons/cog.svg"}
							imageAlt={"cog"}/>
					</li>
				</ul>
			</nav>
		</aside>
	)
}