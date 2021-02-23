import { useState, useEffect } from 'react';
import styles from '../styles/components/CountDown.module.css';

// código dia 2 #jornadainfinita
export function CountDown(){
    const [time, setTime] = useState(25*60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time%60;

    // padStart adiciona um 0 antes da string que contiver apenas 1 caracter como de 0 até 9, ficando 00 - 09
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown(){
        setActive(true);
    }

    useEffect(()=>{
        if(active && time > 0){
            setTimeout(()=>{
                setTime(time-1);
            }, 1000)
        }
    }, [active, time]);

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
            <button
                onClick={startCountDown} 
                type="button" 
                className={styles.countDownButton}>
                Iniciar um ciclo
            </button>
        </div>
    )
}