import {useContext} from "react";
import {ChallengesContext} from "../contexts/ChallengesContext";

import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const {level, name, url} = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src={url} alt="Foto perfil"/>
            <div>
                <strong>{name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}