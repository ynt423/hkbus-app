import React from "react";

const busRoute = ({ data }) => {
  return (
    <div>
      <p>{data.route}</p>
      <p>{data.stop}</p>
    </div>
  );
};

export default busRoute;
