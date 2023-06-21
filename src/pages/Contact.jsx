import { useRef } from "react";
import LocationsPreview from "../components/LocationsPreview";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
	const formRef = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		// Make sure no inputs are empty
		const form = formRef.current;
		let formValid = true;
		for (let i = 0; i < form.length; i++) {
			const input = form[i];
			if (input.value === "") {
				// Add notValid class to input's parent div
				input.parentNode.classList.add("notValid");
				formValid = false;
			} else {
				input.parentNode.classList.remove("notValid");
			}
		}
		// If they aren't, show a success message
		if (formValid) {
			toast.success("👌 Thanks for reaching out, talk soon!", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	};

	return (
		<>
			<ToastContainer />
			<section className="contact container bg-primary text-light section-spacer-b">
				<div className="row">
					<div className="col-12 col-lg-6 d-flex flex-column justify-content-center contact-text">
						<h1>Contact Us</h1>
						<p>
							Ready to take it to the next level? Let's talk about your project
							or idea and find out how we can help your business grow. If you
							are looking for unique digital experiences that's relatable to
							your users, drop us a line.
						</p>
					</div>
					<div className="col-12 col-lg-6 contact-form-wrapper">
						<form ref={formRef}>
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
						</form>
						<div className="d-flex contact-btn-wrapper">
							<button
								className="btn btn-light float-lg-end btn-xl"
								onClick={handleSubmit}
							>
								SUBMIT
							</button>
						</div>
					</div>
				</div>
			</section>
			<LocationsPreview />
		</>
	);
}
