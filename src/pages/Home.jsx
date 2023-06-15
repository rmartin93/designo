import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Home() {
	return (
		<div className="home">
			<section className="container homeBanner bg-primary text-light">
				<div className="row">
					<div className="col-md-6 text-center text-md-start">
						<h1>Award-winning custom designs and digital branding solutions</h1>
						<p className="mt-4">
							With over 10 years in the industry, we are experienced in creating
							fully responsive websites, app design, and engaging brand
							experiences. Find out more about our services.
						</p>
						<button className="btn btn-light btn-cta mt-3">LEARN MORE</button>
					</div>
				</div>
			</section>
			<section className="container px-sm-0 section-spacer-y">
				<div className="row px-sm-0">
					<div className="col-md-6">
						<Link
							to="/projects"
							className="card rounded-4 text-light gallery-card bg-1"
						>
							<div className="overlay h-100 d-flex flex-column justify-content-center align-items-center gap-4">
								<h2>WEB DESIGN</h2>
								<h3>
									VIEW PROJECTS
									<BsChevronRight className="text-primary ms-3" />
								</h3>
							</div>
						</Link>
					</div>
					<div className="col-md-6">
						<div className="row flex-column">
							<div className="col-12">
								<Link
									to="/projects"
									className="card rounded-4 text-light gallery-card bg-2 gallery-card-split gallery-card-spacer"
								>
									<div className="overlay h-100 d-flex flex-column justify-content-center align-items-center gap-4">
										<h2>APP DESIGN</h2>
										<h3>
											VIEW PROJECTS
											<BsChevronRight className="text-primary ms-3" />
										</h3>
									</div>
								</Link>
							</div>
							<div className="col-12">
								<Link
									to="/projects"
									className="card rounded-4 text-light gallery-card bg-3 gallery-card-split"
								>
									<div className="overlay h-100 d-flex flex-column justify-content-center align-items-center gap-4">
										<h2>GRAPHIC DESIGN</h2>
										<h3>
											VIEW PROJECTS
											<BsChevronRight className="text-primary ms-3" />
										</h3>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="container features section-spacer-b">
				<div className="row">
					<div className="col-12 col-lg-4">
						<div className="card border-0 flex-md-row flex-lg-column mb-5 mb-md-0">
							<div className="card-img-top img-1"></div>
							<div className="card-body text-center text-md-start text-lg-center">
								<h3 className="my-4">PASSIONATE</h3>
								<p>
									Each project starts with an in-depth brand research to ensure
									we only create products that serve a purpose. We merge art,
									design, and technology into exciting new solutions.
								</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-4">
						<div className="card border-0 flex-md-row flex-lg-column mb-5 mb-md-0">
							<div className="card-img-top img-2"></div>
							<div className="card-body text-center text-md-start text-lg-center">
								<h3 className="my-4">RESOURCEFUL</h3>
								<p>
									Everything that we do has a strategic purpose. We use an agile
									approach in all of our projects and value customer
									collaboration. It guarantees superior results that fulfill our
									clients’ needs.
								</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-4">
						<div className="card border-0 flex-md-row flex-lg-column">
							<div className="card-img-top img-3"></div>
							<div className="card-body text-center text-md-start text-lg-center">
								<h3 className="my-4">FREINDLY</h3>
								<p>
									We are a group of enthusiastic folks who know how to put
									people first. Our success depends on our customers, and we
									strive to give them the best experience a company can provide.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="container px-sm-0 text-light">
				<div className="row px-sm-0">
					<div className="col-12">
						<div className="cta bg-primary rounded-4">
							<div className="row">
								<div className="col-12 col-lg-6 text-center text-lg-start">
									<h2>Let's talk about your project</h2>
									<p>
										Ready to take it to the next level? Contact us today and
										find out how our expertise can help your business grow.
									</p>
								</div>
								<div className="col-12 col-lg-6 cta-btn-wrapper">
									<button className="btn btn-light btn-cta">
										GET IN TOUCH
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-4 d-none">
				<div className="container">
					<div className="row">
						<div className="col-6">
							<div className="card shadow bg-primary border-0">
								<div className="card-body">
									<h2>FORM ELEMENTS</h2>
									<form>
										<input
											type="text"
											className="form-control"
											placeholder="Empty Form"
										/>
									</form>
									<button className="btn btn-light btn-cta mt-3">
										LEARN MORE
									</button>
								</div>
							</div>
							<button className="btn btn-primary btn-cta mt-3">
								LEARN MORE
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
