import React from "react";

export default function Img(props) {
  const { img, alt, height, width } = props;
  const style = {
    height: height,
    width: width,
  };
  return (
    <div
      className="text-center p-3 mt-4 shadow d-inline-block"
      style={{ backgroundColor: "#ecd3c0" }}
    >
      <img src={img} className="img-fluid" alt={alt} style={style} />
    </div>
  );
}
