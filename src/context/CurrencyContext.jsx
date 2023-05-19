import { useContext, createContext, useState, useMemo } from "react";
import { currency } from "../helpers/currency";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
	const [currentCurrency, setCurrentCurrency] = useState(currency["EUR"]);

	const hChange = (e) => {
		setCurrentCurrency(currency[e.target.value]);
	};

	const value = useMemo(
		() => ({
			currentCurrency,
			hChange,
		}),
		[currentCurrency]
	);

	return (
		<CurrencyContext.Provider value={{ value }}>
			{children}
		</CurrencyContext.Provider>
	);
};

export const useCurrency = () => useContext(CurrencyContext);

export { currency };
