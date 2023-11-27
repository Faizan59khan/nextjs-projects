import Link from "next/link";

const Navbar = () => {
	return (
		<nav>
			<Link href="/">Home</Link>
			<Link href="/login">login</Link>
		</nav>
	);
};

export default Navbar;
