import { useEffect, useState } from "react";
import { URI_API } from "../const/const";

export const useText = holiday => {
	const [text, setText] = useState('Выберите повод!');

	useEffect(() => {
		if (!holiday) return;

		fetch(`${URI_API}text/${holiday}`)
			.then(responce => {
				if (responce.status !== 200) {
					throw new Error(responce.status)
				}
				return responce.json()
			})
			.then(data => {
				if (data.text) {
					setText(data.text)
				}
			})
			.catch(err => console.log(err));
		
	}, [holiday]);
	
	return [text];
}