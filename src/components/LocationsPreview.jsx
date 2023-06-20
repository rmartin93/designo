export default function LocationsPreview() {
	return (
		<section className="locationsPreview section-spacer-y">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="locationsPreview-image canada"></div>
						<div className="locationsPreview-text text-center mt-2">
							<h3>CANADA</h3>
							<button className="btn btn-primary my-4">SEE LOCATION</button>
						</div>
					</div>
					<div className="col-md-4">
						<div className="locationsPreview-image australia"></div>
						<div className="locationsPreview-text text-center mt-2">
							<h3>AUSTRALIA</h3>
							<button className="btn btn-primary my-4">SEE LOCATION</button>
						</div>
					</div>
					<div className="col-md-4">
						<div className="locationsPreview-image uk"></div>
						<div className="locationsPreview-text text-center mt-2">
							<h3>UNITED KINGDOM</h3>
							<button className="btn btn-primary my-4">SEE LOCATION</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
