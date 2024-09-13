import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import ScrollToTop from "./scrollToTop.tsx";
import "./theme/theme.css";

import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";
import global_gr from "./translations/gr/global.json";
import global_it from "./translations/it/global.json";
import global_lt from "./translations/lt/global.json";
import global_pl from "./translations/pl/global.json";
import i18next from "i18next";

import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

i18next.init({
	interpolation: { escapeValue: false },
	lng: "en",
	resources: {
		en: {
			global: global_en,
		},
		es: {
			global: global_es,
		},
		gr: {
			global: global_gr,
		},
		it: {
			global: global_it,
		},
		lt: {
			global: global_lt,
		},
		pl: {
			global: global_pl,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18next}>
			<BrowserRouter>
				<ScrollToTop />
				<Router />
			</BrowserRouter>
		</I18nextProvider>
	</React.StrictMode>
);
