import Link from "next/link";

const Navbar = () => {
	const navStyle: React.CSSProperties = {
		backgroundColor: "#333",
		color: "white",
		padding: "10px",
		position: "fixed",
		top: "0",
		width: "100vw",
		height: "40px",
	};

	const linkStyle = {
		color: "white",
		textDecoration: "none",
		marginRight: "10px",
	};

	const hoverLinkStyle = {
		textDecoration: "underline",
	};

	return (
		<nav style={navStyle}>
			<Link style={linkStyle} href="/">
				Home
			</Link>
			<Link style={linkStyle} href="/login">
				Login
			</Link>
			<Link style={linkStyle} href="/fetch/revalidate">
				Revalidate Fetch
			</Link>
		</nav>
	);
};

export default Navbar;
