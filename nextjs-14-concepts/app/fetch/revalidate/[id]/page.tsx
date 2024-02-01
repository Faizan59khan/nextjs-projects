import React from "react";

export async function generateStaticParams() {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );

  return todos.map((todo: any) => ({
    id: todo.id.toString(),
  }));
}

export const fetchingData = async (id: string) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: {
      revalidate: 30,
    },
  });
  return data?.json();
};

const page = async ({ params }: any) => {
  const todo = await fetchingData(params?.id);
  const containerStyle: React.CSSProperties = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
  };

  const todoStyle = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
    marginBottom: "20px",
    maxWidth: "400px",
  };

  console.log(params);

  return (
    <div style={containerStyle}>
      <div style={todoStyle}>
        <h2>Title: {todo?.title}</h2>
        <p>User ID: {todo?.userId}</p>
        <p>ID: {todo?.id}</p>
        <p>Completed: {todo?.completed ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

//In Older versions
// export async function getServerSideProps({ params }) {
//   const todo = await fetchingData(params?.id);
//   return {
//     props: {
//       todo,
//     },
//   };
// }

export default page;
