import React from "react";
import Link from "next/link";

export const fetchingData = async () => {
	const data = await fetch("https://jsonplaceholder.typicode.com/todos", {
		next: {
			revalidate: 0,
		},
	});
	return data?.json();
};

const Page = async () => {
	const todos = await fetchingData();
	return (
		<div
			style={{
				marginTop: "50px",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{todos?.map((todo: any) => (
				<div
					key={todo?.id}
					style={{ marginBottom: "1rem", border: "1px solid blue", padding: "15px" }}
				>
					<p>
						<Link
							href={`/fetch/revalidate/${todo?.id}`}
							style={{ color: "blue", textDecoration: "none" }}
						>
							{todo?.title}
						</Link>
					</p>
				</div>
			))}
		</div>
	);
};

//In Older versions
// export async function getStaticProps() {
//   const todos = await fetchingData();
//   return {
//     props: {
//       todos,
//     },
//   };
// }

export default Page;
