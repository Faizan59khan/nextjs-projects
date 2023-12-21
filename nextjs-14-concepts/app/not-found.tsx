// NotFound.js

import React from "react";

const NotFound = () => {
	const notFoundStyles: React.CSSProperties = {
		width: "100vw",
		height: "100vh",
		marginTop: "40px",
		backgroundColor: "#f0f0f0",
		textAlign: "center",
		fontSize: "24px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	return <div style={notFoundStyles}>404 not found</div>;
};

export default NotFound;
