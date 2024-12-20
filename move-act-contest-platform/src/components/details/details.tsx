import { Container, Image } from "react-bootstrap";
import { StlViewer } from "react-stl-viewer";

type DetailsProps = {
	image: string;
	title: string;
	titleTranslation: string;
	participantName: string;
	category: string;
	authorBio: string;
	authorBioTranslation: string;
	description: string;
	descriptionTranslation: string;
	stlFile: string;
};

const Details = ({
	image,
	title,
	titleTranslation,
	participantName,
	category,
	authorBio,
	authorBioTranslation,
	description,
	descriptionTranslation,
	stlFile,
}: DetailsProps) => {
	return (
		<Container className="details-container text-center">
			<Image src={image} fluid />
			<h1 className="details-title">{title}</h1>
			<h3 className="details-participant text-muted">
				{participantName} - {category}
			</h3>
			<p className="details-description">{authorBio}</p>
			<p className="details-description">{description}</p>

			<h1 className="details-title">{titleTranslation}</h1>
			<h3 className="details-participant text-muted">
				{participantName} - {category}
			</h3>
			<p className="details-description">{authorBioTranslation}</p>
			<p className="details-description">{descriptionTranslation}</p>

			<StlViewer className="stl-viewer" orbitControls shadows url={stlFile} />
		</Container>
	);
};

export default Details;
