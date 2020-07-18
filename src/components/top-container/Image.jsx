import React from "react";

function Image(props) {
  return <img className={props.class} src={props.img} alt="img" />;
}

export default Image;
