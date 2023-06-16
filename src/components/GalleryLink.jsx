import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function GalleryLink({ title, classList, link }) {
	return (
		<Link
			to={link}
			className={`card rounded-4 text-light gallery-card ${classList}`}
		>
			<div className="overlay h-100 d-flex flex-column justify-content-center align-items-center gap-4">
				<h2>{title}</h2>
				<h3>
					VIEW PROJECTS
					<BsChevronRight className="text-primary ms-3" />
				</h3>
			</div>
		</Link>
	);
}
