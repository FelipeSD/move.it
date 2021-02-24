import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CountDown.module.css';

// código dia 2 #jornadainfinita

let countDownTimeout: NodeJS.Timeout;

export function CountDown(){
    const { startNewChallenge } = useContext(ChallengesContext);

    
    const [time, setTime] = useState(0.1*60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time%60;

    // padStart adiciona um 0 antes da string que contiver apenas 1 caracter como de 0 até 9, ficando 00 - 09
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown(){
        setIsActive(true);
    }

    function resetCountDown(){
        clearTimeout(countDownTimeout);
        setIsActive(false);
        setTime(0.1*60);
    }

    useEffect(()=>{
        if(isActive && time > 0){
            countDownTimeout = setTimeout(()=>{
                setTime(time-1);
            }, 1000)
        }else if(isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            
            startNewChallenge();
        }
    }, [isActive, time]);

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