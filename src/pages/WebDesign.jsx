import { Link } from "react-router-dom";
import HeroTitle from "../components/HeroTitle";
import Cta from "../components/Cta";
import GalleryLink from "../components/GalleryLink";
export default function WebDesign() {
	return (
		<div className="web-design">
			<HeroTitle title="Web Design" />
			<section className="preview-gallery section-spacer-y">
				<div className="container">
					<div className="row mb-lg-5">
						<div className="col-12 col-lg-4">
							<div className="card border-0 rounded-4 shadow flex-column flex-sm-row flex-lg-column">
								<div className="card-img-top rounded-top-4 express"></div>
								<Link
									to="/"
									className="card-body text-center d-flex flex-column justify-content-center rounded-bottom-4"
								>
									<h3 className="my-4 text-primary">EXPRESS</h3>
									<p>A multi-carrier shipping website for ecommerce business</p>
								</Link>
							</div>
						</div>
						<div className="col-12 col-lg-4">
							<div className="card border-0 rounded-4 shadow flex-column flex-sm-row flex-lg-column">
								<div className="card-img-top rounded-top-4 transfer"></div>
								<Link
									to="/"
									className="card-body text-center d-flex flex-column justify-content-center rounded-bottom-4"
								>
									<h3 className="my-4 text-primary">TRANSFER</h3>
									<p>
										Site for low-cost money transfers and sending money within
										seconds
									</p>
								</Link>
							</div>
						</div>
						<div className="col-12 col-lg-4">
							<div className="card border-0 rounded-4 shadow flex-column flex-sm-row flex-lg-column">
								<div className="card-img-top rounded-top-4 photon"></div>
								<Link
									to="/"
									className="card-body text-center d-flex flex-column justify-content-center rounded-bottom-4"
								>
									<h3 className="my-4 text-primary">PHOTON</h3>
									<p>
										A state-of-the-art music player with high-resolution audio
										and DSP effects
									</p>
								</Link>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-lg-4">
							<div className="card border-0 rounded-4 shadow flex-column flex-sm-row flex-lg-column">
								<div className="card-img-top rounded-top-4 builder"></div>
								<Link
									to="/"
									className="card-body text-center d-flex flex-column justify-content-center rounded-bottom-4"
								>
									<h3 className="my-4 text-primary">BUILDER</h3>
									<p>
										Connects users with local contractors based on their
										location
									</p>
								</Link>
							</div>
						</div>
						<div className="col-12 col-lg-4">
							<div className="card border-0 rounded-4 shadow flex-column flex-sm-row flex-lg-column">
								<div className="card-img-top rounded-top-4 blogr"></div>
								<Link
									to="/"
									className="card-body text-center d-flex flex-column justify-content-center rounded-bottom-4"
								>
									<h3 className="my-4 text-primary">BLOGR</h3>
									<p>
										Blogr is a platform for creating an online blog or
										publication
									</p>
								</Link>
							</div>
						</div>
						<div className="col-12 col-lg-4">
							<div className="card border-0 rounded-4 shadow flex-column flex-sm-row flex-lg-column">
								<div className="card-img-top rounded-top-4 camp"></div>
								<Link
									to="/"
									className="card-body text-center d-flex flex-column justify-content-center rounded-bottom-4"
								>
									<h3 className="my-4 text-primary">CAMP</h3>
									<p>
										Get expert training in coding, data, design, and digital
										marketing
									</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="gallery section-spacer-y">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-6 mb-5 mb-lg-0">
							<GalleryLink
								title="app design"
								classList="bg-2"
								link="/app-design"
							/>
						</div>
						<div className="col-12 col-lg-6">
							<GalleryLink
								title="graphic design"
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
