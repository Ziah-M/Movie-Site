import React from "react";

const Summary = ({ data }) => {
  return (
    <div>
      <i>{data && <p>{data}</p>}</i>
    </div>
  );
};

export default Summary;
