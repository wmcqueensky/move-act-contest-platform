import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./navbar";
import Footer from "./footer";
import NAVBAR_HEIGHT from "../../constants.ts";

const Layout = () => {
	return (
		<Container
			fluid
			className="d-flex flex-column min-vh-100 p-0 overflow-hidden"
		>
			<Row>
				<Col>
					<Navbar />
				</Col>
			</Row>
			<Row className="flex-grow-1" style={{ marginTop: NAVBAR_HEIGHT }}>
				<Col
					className="d-flex justify-content-end"
					style={{ minHeight: "400px" }}
				>
					<Container fluid className="w-100 h-auto p-0">
						<Outlet />
					</Container>
				</Col>
			</Row>
			<Row>
				<Col>
					<Footer />
				</Col>
			</Row>
		</Container>
	);
};

export default Layout;
