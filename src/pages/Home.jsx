import phoneImg from "../../assets/home/desktop/image-hero-phone.png";
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
