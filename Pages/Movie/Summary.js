import React from "react";

const Summary = ({ data }) => {
  return (
    <div>
      <h1>Summary:</h1>
      <i>{data && <p>{data}</p>}</i>
    </div>
  );
};

export default Summary;
