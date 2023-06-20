import HeroTitle from "../components/HeroTitle";
import Cta from "../components/Cta";
import GalleryLink from "../components/GalleryLink";
import ProjectCard from "../components/ProjectCard";
export default function AppDesign() {
	return (
		<div className="app-design">
			<HeroTitle
				title="App Design"
				text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
			/>
			<section className="preview-gallery section-spacer-y">
				<div className="container">
					<div className="row mb-lg-5">
						<div className="col-12 col-lg-4">
							<ProjectCard
								title="AIRFILTER"
								text="Solving the problem of poor indoor air quality by filtering the air"
								classList="airfilter"
								link="/"
							/>
						</div>
						<div className="col-12 col-lg-4">
							<ProjectCard
								title="EYECAM"
								text="Product that lets you edit your favorite photos and videos at any time"
								classList="eyecam"
								link="/"
							/>
						</div>
						<div className="col-12 col-lg-4">
							<ProjectCard
								title="FACEIT"
								text="Get to meet your favorite internet superstar with the faceit app"
								classList="faceit"
								link="/"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-lg-4">
							<ProjectCard
								title="TODO"
								text="A todo app that features cloud sync with light and dark mode"
								classList="todo"
								link="/"
							/>
						</div>
						<div className="col-12 col-lg-4">
							<ProjectCard
								title="LOOPSTUDIOS"
								text="A VR experience app made for Loopstudios"
								classList="loopstudios"
								link="/"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="gallery section-spacer-y">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-6 mb-5 mb-lg-0">
							<GalleryLink
								title="WEB DESIGN"
								classList="bg-1"
								link="/web-design"
							/>
						</div>
						<div className="col-12 col-lg-6">
							<GalleryLink
								title="GRAPHIC DESIGN"
								classList="bg-3"
								link="/graphic-design"
							/>
						</div>
					</div>
				</div>
			</section>
			<Cta />
		</div>
	);
}
