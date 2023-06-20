import HeroTitle from "../components/HeroTitle";
import Cta from "../components/Cta";
import GalleryLink from "../components/GalleryLink";
import ProjectCard from "../components/ProjectCard";
export default function GraphicDesign() {
	return (
		<div className="graphic-design">
			<HeroTitle
				title="Graphic Design"
				text="We deliver eye-catching branding materials that are tailored to meet your business objectives."
			/>
			<section className="preview-gallery section-spacer-y">
				<div className="container">
					<div className="row mb-lg-5">
						<div className="col-12 col-lg-4">
							<ProjectCard
								title="TIM BROWN"
								text="A book cover designed for Tim Brown's new release, 'Change'"
								classList="timbrown"
								link="/"
							/>
						</div>
						<div className="col-12 col-lg-4">
							<ProjectCard
								title="BOXED WATER"
								text="A simple packaging concept made for Boxed Water"
								classList="boxedwater"
								link="/"
							/>
						</div>
						<div className="col-12 col-lg-4">
							<ProjectCard
								title="SCIENCE!"
								text="A poster made in collaboration with the Federal Art Project"
								classList="science"
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
								title="APP DESIGN"
								classList="bg-3"
								link="/app-design"
							/>
						</div>
					</div>
				</div>
			</section>
			<Cta />
		</div>
	);
}
