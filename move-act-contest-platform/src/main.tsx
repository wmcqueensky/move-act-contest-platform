import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./scrollToTop.tsx";
import "./theme/theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<Router />
		</BrowserRouter>
	</React.StrictMode>
);
