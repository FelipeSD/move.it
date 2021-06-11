import {createContext, useState, ReactNode, useEffect} from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import {LevelUpModal} from "../components/LevelUpModal";

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesProviderProps {
    children: ReactNode;
    name: string;
    url: string;
    defaultTime?: number,
    level?: number,
    currentExperience?: number
    challengesCompleted?: number
}

interface ChallengesContextData {
    name: string;
    level: number;
    defaultTime: number;
    url: string;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;

    changeName: (string)=>void;
    changeUrl: (string)=>void;
    changeDefaultTime: (number)=>void;
    levelUp: ()=>void;
    startNewChallenge: ()=>void;
    resetChallenge: ()=>void;
    completeChallenge: ()=>void;
    closeLevelUpModal: ()=>void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

// código NLW3 = #focopraticagrupo

export function ChallengesProvider({
        children,
        ...rest
}: ChallengesProviderProps){
    const [name, setName] = useState(rest.name ?? 'Unnamed');
    const [url, setUrl] = useState(rest.url ?? 'icons/avatar.svg');
    const [defaultTime, setDefaultTime] = useState(rest.defaultTime ?? 6);
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const [isLevelModalOpen, setIsLevelUpModalOpen] = useState(false);

    const experienceToNextLevel = Math.pow((level+1)*4, 2)

    useEffect(()=>{
        Notification.requestPermission();
    }, []);

    useEffect(()=>{
        Cookies.set("name", String(name));
        Cookies.set("url", String(url));
        Cookies.set("level", String(level));
        Cookies.set("defaultTime", String(defaultTime));
        Cookies.set("currentExperience", String(currentExperience));
        Cookies.set("challengesCompleted", String(challengesCompleted));
    }, [
        name,
        url,
        level,
        defaultTime,
        currentExperience,
        challengesCompleted
    ]);

    function changeName(newName: string){
        setName(newName);
    }

    function changeUrl(newUrl: string) {
        setUrl(newUrl);
    }

    function changeDefaultTime(newDefaultTime: number) {
        setDefaultTime(newDefaultTime);
    }

    function levelUp(){
        setLevel(level+1);
        setIsLevelUpModalOpen(true);
    }

    function closeLevelUpModal(){
        setIsLevelUpModalOpen(false);
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);

        // arquivo da pasta public é possível utilizar sem colocar o caminho inteiro, por toda aplicação.
        new Audio('/notification.mp3').play().then(()=>{

            if(Notification.permission === 'granted'){
                new Notification('Novo desafio ', {
                    body: `Valendo ${challenge.amount}xp!`
                });
            }

        });
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    function completeChallenge() {
        if(!activeChallenge){
            return;
        }

        const {amount} = activeChallenge;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted+1);
    }

    return (
        <ChallengesContext.Provider 
            value={{
                name,
                url,
                level,
                defaultTime,
                currentExperience,
                challengesCompleted,
                activeChallenge,
                experienceToNextLevel,
                changeName,
                changeUrl,
                changeDefaultTime,
                levelUp,
                startNewChallenge,
                resetChallenge,
                completeChallenge,
                closeLevelUpModal
            }}
        >
            {children}
            {isLevelModalOpen && <LevelUpModal/>}
        </ChallengesContext.Provider>
    )
}