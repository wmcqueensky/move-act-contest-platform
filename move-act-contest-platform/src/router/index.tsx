import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts";
import HomePage from "../pages/home";
import WorksPage from "../pages/works";
import AboutPage from "../pages/guidelines";
import ContactPage from "../pages/contact";
import ResetPasswordPage from "../pages/reset-password";
import AccountDetailsPage from "../pages/account-details";

import {
	WORKS_PATH,
	GUIDELINES_PATH,
	CONTACT_PATH,
	HOME_PATH,
	RESET_PASSWORD_PATH,
	ACCOUNT_DETAILS_PATH,
} from "./paths";

const Router = () => (
	<Routes>
		<Route element={<Layout />}>
			<Route index element={<HomePage />} />
			<Route path={WORKS_PATH} element={<WorksPage />} />
			<Route path={GUIDELINES_PATH} element={<AboutPage />} />
			<Route path={CONTACT_PATH} element={<ContactPage />} />
			<Route path={ACCOUNT_DETAILS_PATH} element={<AccountDetailsPage />} />
		</Route>
		<Route path={RESET_PASSWORD_PATH} element={<ResetPasswordPage />} />
		<Route path="*" element={<Navigate to={{ pathname: HOME_PATH }} />} />
	</Routes>
);

export default Router;
