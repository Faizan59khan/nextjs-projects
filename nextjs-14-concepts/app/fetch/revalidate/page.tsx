import React from "react";
import Link from "next/link";

export const fetchingData = async () => {
	const data = await fetch("https://jsonplaceholder.typicode.com/todos", {
		next: {
			revalidate: 30,
		},
	});
	return data?.json();
};

const Page = async () => {
	const todos = await fetchingData();
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			{todos?.map((todo: any) => (
				<p key={todo?.id}>
					<Link href={`/fetch/revalidate/${todo?.id}`}>{todo?.title}</Link>
				</p>
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
