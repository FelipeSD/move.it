import { useContext } from 'react';
import styles from '../styles/components/CountDown.module.css';
import {CountDownContext} from "../contexts/CountDownContext";

// código dia 2 #jornadainfinita

export function CountDown(){
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountDown,
        startCountDown
    } = useContext(CountDownContext);

    // padStart adiciona um 0 antes da string que contiver apenas 1 character como de 0 até 9, ficando 00 - 09
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    className={`${styles.countDownButton}`}>
                    
                    Ciclo encerrado
                    <img src="icons/check-circle.svg" alt="terminado" />
                </button>
            ) : (
                // REACT FRAGMENT
                <>
                    {isActive ? (
                        <button
                            onClick={resetCountDown} 
                            type="button" 
                            className={`${styles.countDownButton} ${styles.countDownButtonActive}`}>

                            Abandonar ciclo
                            <img src="icons/close.svg" alt="fechar" />
                        </button>
                    ) : (

                        <button
                            onClick={startCountDown} 
                            type="button" 
                            className={styles.countDownButton}>

                            Iniciar ciclo            
                            
                        </button>
                    ) }
                </>
            ) }            

        </div>
    )
}