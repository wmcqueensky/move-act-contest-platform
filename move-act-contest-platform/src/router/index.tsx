import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts";
import HomePage from "../pages/home";
import WorksPage from "../pages/works";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import DetailsPage from "../pages/details";
import {
	WORKS_PATH,
	ABOUT_PATH,
	CONTACT_PATH,
	HOME_PATH,
	DETAILS_PATH,
} from "./paths";

const Router = () => (
	<Routes>
		<Route element={<Layout />}>
			<Route index element={<HomePage />} />
			<Route path={WORKS_PATH} element={<WorksPage />} />
			<Route path={ABOUT_PATH} element={<AboutPage />} />
			<Route path={CONTACT_PATH} element={<ContactPage />} />
			<Route path={DETAILS_PATH} element={<DetailsPage />} />
		</Route>
		<Route path="*" element={<Navigate to={{ pathname: HOME_PATH }} />} />
	</Routes>
);

export default Router;
