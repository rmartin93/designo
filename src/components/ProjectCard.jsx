import { Link } from "react-router-dom";

export default function ProjectCard({ title, text, classList, link }) {
	return (
		<div className="card border-0 rounded-4 shadow flex-column flex-sm-row flex-lg-column">
			<div className={`card-img-top rounded-top-4 ${classList}`}></div>
			<Link
				to={link}
				className="card-body text-center d-flex flex-column justify-content-center rounded-bottom-4"
			>
				<h3 className="my-4 text-primary">{title}</h3>
				<p>{text}</p>
			</Link>
		</div>
	);
}
