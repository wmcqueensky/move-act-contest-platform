import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts";
import HomePage from "../pages/home";
import ProjectsPage from "../pages/projects";
import InfoPage from "../pages/info";
import ContactPage from "../pages/contact";
import { PROJECTS_PATH, INFO_PATH, CONTACT_PATH, HOME_PATH } from "./paths";

const Router = () => (
	<Routes>
		<Route element={<Layout />}>
			<Route index element={<HomePage />} />
			<Route path={PROJECTS_PATH} element={<ProjectsPage />} />
			<Route path={INFO_PATH} element={<InfoPage />} />
			<Route path={CONTACT_PATH} element={<ContactPage />} />
		</Route>
		<Route path="*" element={<Navigate to={{ pathname: HOME_PATH }} />} />
	</Routes>
);

export default Router;
