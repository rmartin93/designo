import logoLight from "../../public/assets/shared/desktop/logo-light.png";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
	return (
		<footer className="bg-dark pb-5">
			<div className="container">
				<div className="footer-nav">
					<div className="footer-nav-logo-wrapper">
						<Link to="/">
							<img className="logo" src={logoLight} alt="Designo" />
						</Link>
					</div>
					<ul>
						<li>
							<Link to="/company">OUR COMPANY</Link>
						</li>
						<li>
							<Link to="/locations">LOCATIONS</Link>
						</li>
						<li>
							<Link to="/contact">CONTACT</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="container">
				<div className="footer-info">
					<div className="footer-info-address">
						<h3>Designo Central Office</h3>
						<p className="mb-1">3886 Wellington St</p>
						<p className="mb-0">Toronto, Ontario M9C 3J5</p>
					</div>
					<div className="footer-info-contact">
						<h3>Contact Us (Central Office)</h3>
						<p className="mb-1">P : +1 253-863-8967</p>
						<p className="mb-0">M : contact@designo.co</p>
					</div>
					<div className="footer-info-social">
						<ul>
							<li>
								<a href="https://www.facebook.com">
									<BsFacebook />
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com">
									<BsYoutube />
								</a>
							</li>
							<li>
								<a href="https://www.twitter.com">
									<BsTwitter />
								</a>
							</li>
							<li>
								<a href="https://www.pinterest.com">
									<BsPinterest />
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com">
									<BsInstagram />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
