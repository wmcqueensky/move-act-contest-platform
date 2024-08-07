import { useEffect, useRef } from "react";
import { Container, Image } from "react-bootstrap";

type DetailsProps = {
	image: string;
	title: string;
	participantName: string;
	category: string;
	description: string;
	stlFile: string;
};

const Details = ({
	image,
	title,
	participantName,
	category,
	description,
	stlFile,
}: DetailsProps) => {
	const viewerRef = useRef<HTMLDivElement>(null);

	// useEffect(() => {
	// 	if (viewerRef.current) {
	// 		// Initialize the STL viewer
	// 		new (window as any).StlViewer(viewerRef.current, {
	// 			models: [{ id: 0, filename: stlFile }],
	// 		});
	// 	}
	// }, [stlFile]);

	return (
		<Container className="details-container text-center">
			<Image src={image} fluid />
			<h1 className="details-title">{title}</h1>
			<h3 className="details-participant text-muted">
				{participantName} - {category}
			</h3>
			<p className="details-description">{description}</p>
			{/* <div
				id="stl_cont"
				ref={viewerRef}
				style={{ height: "500px", width: "100%" }}
			></div> */}
			{/* <iframe
				id="vs_iframe"
				src="https://www.viewstl.com/?embedded"
				style={{
					border: "0",
					margin: "0",
					width: "1080px",
					height: "500px",
				}}
				title="ViewSTL Embedded Frame"
			/> */}

			<iframe
				id="vs_iframe"
				src="https://www.viewstl.com/?embedded"
				style={{
					border: "0",
					margin: "0",
					width: "1080px",
					height: "500px",
				}}
			></iframe>
		</Container>
	);
};

export default Details;
