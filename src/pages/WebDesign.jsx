import HeroTitle from "../components/HeroTitle";
import Cta from "../components/Cta";
import GalleryLink from "../components/GalleryLink";
import ProjectCard from "../components/ProjectCard";
export default function WebDesign() {
	return (
		<div className="web-design">
			<HeroTitle
				title="Web Design"
				text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
			/>
			<section className="preview-gallery section-spacer-y">
				<div className="container">
					<div className="row mb-lg-5">
						<div className="col-12 col-lg-4">
							<ProjectCard
								title="EXPRESS"
								text="A multi-carrier shipping website for ecommerce business"
								classList="express"
								link="/"
							/>
						</div>
						<div className="col-12 col-lg-4">
							<ProjectCard
								title="TRANSFER"
								text="Site for low-cost money transfers and sending money within seconds"
								classList="transfer"
								link="/"
							/>
						</div>
						<div className="col-12 col-lg-4">
							<ProjectCard
								title="PHOTON"
								text="A state-of-the-art music player with high-resolution audio and DSP effects"
								classList="photon"
								link="/"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-lg-4">
							<ProjectCard
								title="BUILDER"
								text="Connects users with local contractors based on their location"
								classList="builder"
								link="/"
							/>
						</div>
						<div className="col-12 col-lg-4">
							<ProjectCard
								title="BLOGR"
								text="Blogr is a platform for creating an online blog or publication"
								classList="blogr"
								link="/"
							/>
						</div>
						<div className="col-12 col-lg-4">
							<ProjectCard
								title="CAMP"
								text="Get expert training in coding, data, design, and digital marketing"
								classList="camp"
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
								title="APP DESIGN"
								classList="bg-2"
								link="/app-design"
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
