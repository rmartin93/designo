import Cta from "../components/Cta";
import LocationsPreview from "../components/LocationsPreview";

export default function About() {
	return (
		<div className="about">
			<div className="about-banner container bg-primary">
				<div className="row flex-wrap-reverse">
					<div className="col-12 col-lg-7">
						<div className="about-banner-info d-flex flex-column justify-content-center text-center text-lg-start text-light">
							<h1 className="mb-3">About Us</h1>
							<p>
								Founded in 2010, we are a creative agency that produces lasting
								results for our clients. We've partnered with many startups,
								corporations, and nonprofits alike to craft designs that make
								real impact. We're always looking forward to creating brands,
								products, and digital experiences that connect with our clients'
								audiences.
							</p>
						</div>
					</div>
					<div className="col-12 col-lg-5 about-banner-img"></div>
				</div>
			</div>
			<div className="about-card container section-spacer-b">
				<div className="row">
					<div className="col-12 col-lg-5 about-card-img img-1"></div>
					<div className="col-12 col-lg-7 about-card-info">
						<div className="d-flex flex-column justify-content-center text-center text-lg-start text-light h-100">
							<h2 className="mb-3 text-primary">World-class talent</h2>
							<p className="text-dark">
								We are a crew of strategists, problem-solvers, and
								technologists. Every design is thoughtfully crafted from concept
								to launch, ensuring success in its given market. We are
								constantly updating our skills in a myriad of platforms.
							</p>
							<p className="text-dark">
								Our team is multi-disciplinary and we are not merely interested
								in form — content and meaning are just as important. We give
								great importance to craftsmanship, service, and prompt delivery.
								Clients have always been impressed with our high-quality
								outcomes that encapsulates their brand's story and mission.
							</p>
						</div>
					</div>
				</div>
			</div>
			<LocationsPreview />
			<div className="about-card container section-spacer-b">
				<div className="row">
					<div className="col-12 col-lg-5 about-card-img img-2"></div>
					<div className="col-12 col-lg-7 about-card-info">
						<div className="d-flex flex-column justify-content-center text-center text-lg-start text-light h-100">
							<h2 className="mb-3 text-primary">The real deal</h2>
							<p className="text-dark">
								As strategic partners in our clients' businesses, we are ready
								to take on any challenge as our own. Solving real problems
								require empathy and collaboration, and we strive to bring a
								fresh perspective to every opportunity. We make design and
								technology more accessible and give you tools to measure
								success.
							</p>
							<p className="text-dark">
								We are visual storytellers in appealing and captivating ways. By
								combining business and marketing strategies, we inspire
								audiences to take action and drive real results.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Cta />
		</div>
	);
}
