/* écrire les 3 lignes pour

- importer la création du context ✅
- créer le context ✅
- exporter le context ✅

*/

import { createContext, useContext, useState } from "react";
import CURRENCY from "../helpers/currency";
const DeviseContext = createContext();

/**
 * Nous créons notre DeviseProvider ici, pour la bonne lecture du code
 */
export function DeviseProvider({ children }) {
	const [currentCurrency, setCurrentCurrency] = useState(CURRENCY["EUR"]);

	const handleChange = (e) => {
		setCurrentCurrency(CURRENCY[e.target.value]);
	};

	return (
		<DeviseContext.Provider
			value={{ CURRENCY, currentCurrency, handleChange }}
		>
			{children}
		</DeviseContext.Provider>
	);
}

export const useCurrency = () => useContext(DeviseContext);

export { DeviseContext };
