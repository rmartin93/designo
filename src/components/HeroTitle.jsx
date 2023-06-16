export default function HeroTitle({ title }) {
	return (
		<section className="hero-title container-sm bg-primary text-light">
			<div className="row">
				<div className="col-12 d-flex justify-content-center align-items-center">
					<h1>{title}</h1>
				</div>
			</div>
		</section>
	);
}
