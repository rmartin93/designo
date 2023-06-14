import { useTheme } from "../hooks/useTheme";

export default function Footer() {
	const { theme } = useTheme();
	return (
		<footer className="py-3" data-bs-theme={theme}>
			<div className="text-center">
				© 2021
				<a className="ms-3" href="https://mdbootstrap.com/">
					MDBootstrap.com
				</a>
			</div>
		</footer>
	);
}
