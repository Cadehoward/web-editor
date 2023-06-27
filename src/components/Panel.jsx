import React from "react";

export default function Panel({ children, width }) {
	return (
		<div className={"box"} style={{ width: width ? `${width}px` : "100%", margin: "0 auto"}}>
			{children}
		</div>
	);
}