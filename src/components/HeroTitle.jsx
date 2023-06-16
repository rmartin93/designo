export default function HeroTitle({ title, text }) {
	return (
		<section className="hero-title container-sm bg-primary text-light">
			<div className="row">
				<div className="col-12 d-flex flex-column justify-content-center align-items-center text-center">
					<h1>{title}</h1>
					<p>{text}</p>
				</div>
			</div>
		</section>
	);
}
