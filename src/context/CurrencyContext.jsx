/* écrire les 3 lignes pour

- importer la création du context ✅
- créer le context ✅
- exporter le context ✅

*/

import { createContext } from "react";
const DeviseContext = createContext();

/**
 * Nous créons notre DeviseProvider ici, pour la bonne lecture du code
 */
export function DeviseProvider({ children }) {
	const SYMBOL = "€";

	return (
		<DeviseContext.Provider value={{ SYMBOL }}>
			{children}
		</DeviseContext.Provider>
	);
}

export { DeviseContext };
