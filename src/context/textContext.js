import { createContext, useContext } from "react";
import { useText } from "../hooks/useText";
import { holidaysContext } from "./holidaysContext";

export const textContext = createContext({});

export const TextContextProvider = ({ children }) => {
	const {holiday} = useContext(holidaysContext)
	const [text] = useText(holiday);
//Поздравляю с днем рожденья!
//Пусть будет жизнь полна веселья,
//Не будет грусти и хлопот,
//А только счастье круглый год!

//Желаю творческих успехов,
//Прекрасных дней, улыбок, смеха.
//Любви, душевного тепла,
//Как сказка, чтобы жизнь была!

	//const { holiday } = useText(holidaysContext);
	//const [text] = useText(holiday);
	return (
		<textContext.Provider value={{text}}>
			{children}
		</textContext.Provider>
	)
}