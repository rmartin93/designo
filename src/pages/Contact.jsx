import LocationsPreview from "../components/LocationsPreview";

export default function Contact() {
	return (
		<>
			<section className="contact container bg-primary text-light section-spacer-b">
				<div className="row">
					<div className="col-12 col-lg-6 d-flex flex-column justify-content-center contact-text">
						<h1>Contact</h1>
						<p>
							Ready to take it to the next level? Let's talk about your project
							or idea and find out how we can help your business grow. If you
							are looking for unique digital experiences that's relatable to
							your users, drop us a line.
						</p>
					</div>
					<div className="col-12 col-lg-6 contact-form-wrapper">
						<form>
							<div className="mb-3">
								<input
									type="text"
									className="form-control"
									placeholder="Name"
								/>
							</div>
							<div className="mb-3">
								<input
									type="email"
									className="form-control"
									placeholder="Email Address"
								/>
							</div>
							<div className="mb-3">
								<input
									type="text"
									className="form-control"
									placeholder="Phone"
								/>
							</div>
							<div className="mb-3">
								<textarea
									className="form-control"
									placeholder="Your Message"
									rows="5"
								></textarea>
							</div>
							<div className="d-flex contact-btn-wrapper">
								<button className="btn btn-light float-lg-end btn-xl">
									SUBMIT
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
			<LocationsPreview />
		</>
	);
}
