import React from "react";

export default function Img(props) {
  const { img, alt, text } = props;
  return (
    <div
      className="text-center p-3 mt-3 shadow d-inline-block"
      style={{ backgroundColor: "#FBE9E7" }}
    >
      <img
        src={img}
        className="img-fluid"
        alt={alt}
        style={{ height: "20rem" }}
      />
      <p className="lead">{text} </p>
    </div>
  );
}
