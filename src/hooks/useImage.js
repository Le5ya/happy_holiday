import { useEffect, useState } from 'react';
import { URI_API } from '../const/const';

export const useImg = holiday => {
	const [data, setData] = useState({});

	useEffect(() => {
		if (!holiday) return;

		fetch(`${URI_API}image/${holiday}`)
			.then(responce => {
				if (responce.status !== 200) {
					throw new Error(responce.status)
				}
				return responce.json()
			})
			.then(data => {
				if (data.idImg) {
					setData(data)
				}
			})
			.catch(err => console.error(err));

	}, [holiday]);

	return data;
}
