export default function Home() {
	return (
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
						<button className="btn btn-primary btn-cta mt-3">LEARN MORE</button>
					</div>
				</div>
			</div>
		</section>
	);
}
