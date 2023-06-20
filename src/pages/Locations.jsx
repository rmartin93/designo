import Cta from "../components/Cta";

export default function Locations() {
	return (
		<>
			<section className="locations section-spacer-b">
				<div className="container">
					<div className="row flex-wrap-reverse">
						<div className="col-lg-8">
							<div className="locations-text gradient-overlay">
								<h2 className="text-primary mb-4">Canada</h2>
								<div className="row">
									<div className="col-sm-6">
										<p className="fw-bold">Designo Central Office</p>
										<p>3886 Wellington Street</p>
										<p>Toronto, Ontario M9C 3J5</p>
									</div>
									<div className="col-sm-6">
										<p className="fw-bold">Contact</p>
										<p>P : +1 253-863-8967</p>
										<p>M : contact@designco.co</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="locations-image canada"></div>
						</div>
					</div>
					<div className="row my-5">
						<div className="col-lg-4">
							<div className="locations-image australia"></div>
						</div>
						<div className="col-lg-8">
							<div className="locations-text gradient-overlay">
								<h2 className="text-primary mb-4">Australia</h2>
								<div className="row">
									<div className="col-sm-6">
										<p className="fw-bold">Designo AU Office</p>
										<p>19 Balonne Street</p>
										<p>New South Wales 2443</p>
									</div>
									<div className="col-sm-6">
										<p className="fw-bold">Contact</p>
										<p>P : (02) 6720 9092</p>
										<p>M : contact@designco.co</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row flex-wrap-reverse">
						<div className="col-lg-8">
							<div className="locations-text gradient-overlay">
								<h2 className="text-primary mb-4">United Kingdom</h2>
								<div className="row">
									<div className="col-sm-6">
										<p className="fw-bold">Designo UK Office</p>
										<p>13 Colorado Way</p>
										<p>Rhyd-y-fro SA8 9GA</p>
									</div>
									<div className="col-sm-6">
										<p className="fw-bold">Contact</p>
										<p>P : 078 3115 1400</p>
										<p>M : contact@designco.co</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="locations-image uk"></div>
						</div>
					</div>
				</div>
			</section>
			<Cta />
		</>
	);
}
