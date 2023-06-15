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
			<section className="container px-sm-0 section-spacer">
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
				</div>
			</section>
			<section className="py-4">
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
