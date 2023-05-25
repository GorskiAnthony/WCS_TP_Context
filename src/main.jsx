import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DeviseProvider } from "./context/CurrencyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<DeviseProvider>
		<App />
	</DeviseProvider>
);
