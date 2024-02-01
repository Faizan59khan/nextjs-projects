import React from "react";

const page = ({ params }: any) => {
  console.log(params);
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
      page
    </div>
  );
};

export default page;
