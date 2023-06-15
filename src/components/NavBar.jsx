import { useTheme } from "../hooks/useTheme";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";
import logoDark from "../../public/assets/shared/desktop/logo-dark.png";
import logoLight from "../../public/assets/shared/desktop/logo-light.png";
export default function NavBar() {
	const { theme, toggleTheme } = useTheme();
	return (
		<nav className="navbar navbar-expand-md py-4" data-bs-theme={theme}>
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img
						src={theme === "light" ? logoDark : logoLight}
						alt="Designo"
						className="logo"
					/>
				</Link>
				<button
					className="navbar-toggler border-0"
					type="button"
					data-bs-toggle="modal"
					data-bs-target="#navModal"
					aria-controls="navModal"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0 gap-2">
						<li className="nav-item">
							<Link className="nav-link" aria-current="page" to="/company">
								OUR COMPANY
							</Link>
						</li>
						<li>
							<Link className="nav-link" aria-current="page" to="/locations">
								LOCATIONS
							</Link>
						</li>
						<li>
							<Link className="nav-link" aria-current="page" to="/contact">
								CONTACT
							</Link>
						</li>
					</ul>
					<button
						type="button"
						className={`btn btn-${theme === "dark" ? "light" : "dark"}`}
						onClick={() => toggleTheme(theme)}
						style={{ paddingBottom: "7px" }}
					>
						{theme === "dark" ? <BsSun /> : <BsMoon />}
					</button>
				</div>
			</div>
			{/* Modal */}
			<div
				className="modal fade"
				id="navModal"
				tabIndex="-1"
				aria-labelledby="navModalLabel"
				aria-hidden="true"
			>
				<div
					className="modal-dialog modal-fullscreen navModal"
					data-bs-theme={theme}
				>
					<div className="modal-content">
						<div
							className="modal-header border-0"
							style={{ paddingBlock: "34px" }}
						>
							<img
								src={theme === "light" ? logoDark : logoLight}
								alt="Designo"
								className="logo"
							/>
							<button
								type="button"
								className="btn-close me-2"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body navModalBody">
							<div className="d-flex flex-column gap-5 mt-4 ms-3">
								<Link className="mobile-link" aria-current="page" to="/company">
									OUR COMPANY
								</Link>
								<Link
									className="mobile-link"
									aria-current="page"
									to="/locations"
								>
									LOCATIONS
								</Link>
								<Link className="mobile-link" aria-current="page" to="/contact">
									CONTACT
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
