import {useContext, useEffect, useState} from "react";
import InputMask from 'react-input-mask';
import styles from "../styles/components/SettingsForm.module.css";
import {InputAdornment, TextField} from "@material-ui/core";
import {ChallengesContext} from "../contexts/ChallengesContext";

export function SettingsForm(){
	const {
		name,
		changeName,
		url,
		changeUrl,
		defaultTime,
		changeDefaultTime
	} = useContext(ChallengesContext);

	const [newName, setNewName] = useState<string>(name);
	const [newUrl, setNewUrl] = useState<string>(url);
	const [newDefaultTime, setNewDefaultTime] = useState<number>(defaultTime);

	const [hasChanged, setHasChanged] = useState<boolean>(false);

	useEffect(()=>{
		setHasChanged(true);
	}, [newName, newUrl, newDefaultTime]);

	function handleSubmit(e){
		e.preventDefault();
		if(name !== newName){
			changeName(newName);
		}
		if(url !== newUrl){
			changeUrl(newUrl);
		}
		if(defaultTime !== newDefaultTime) {
			changeDefaultTime(newDefaultTime);
		}

		setHasChanged(false);
	}

	return (
		<form method="POST" className={styles.formContainer} onSubmit={(e)=>handleSubmit(e)}>
			<div className={styles.formGroup}>
				<TextField
					id="inputName"
					label="Nome"
					type="text"
					placeholder="Digite o seu username"

					variant="outlined"
					fullWidth={true}

					value={newName}
					onChange={(e)=>setNewName(e.target.value)}
				/>
			</div>
			<div className={styles.formGroup}>
				<TextField
					id="inputURL"
					label="URL"
					type="text"
					placeholder="Digite a URL da imagem"

					variant="outlined"
					fullWidth={true}

					value={newUrl}
					onChange={(e)=>setNewUrl(e.target.value)}
				/>
			</div>
			<div className={styles.formGroup}>
				<InputMask
					mask="9999"
				    value={String(newDefaultTime)}
				    onChange={(e)=>setNewDefaultTime(e.target.value.trim())}
				>
					{() => <TextField
						id={"inputTime"}
						label={"Tempo padrão"}
						InputProps={{
							endAdornment: <InputAdornment position="end">segundos</InputAdornment>,
						}}
						variant={"outlined"}
						fullWidth={true}
					/>}
				</InputMask>
			</div>
			<div className={styles.buttonContainer}>
				<button
					disabled={!hasChanged}
					type="submit"
					className={styles.saveConfigButton}
				>
					Salvar
				</button>
			</div>
		</form>
	)
}