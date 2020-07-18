import React from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Image from "./Image";
import Avatar from "../Avatar";

function TopContainer(props) {
  return (
    <div className="top-container">
      <Image class="top-cloud" img="https://i.ibb.co/2yDssxL/cloud.png" />
      <Avatar img="https://i.ibb.co/ZzJg8Df/girl.png" />
      <Heading />
      <Subheading />
      <Image class="bottom-cloud" img="https://i.ibb.co/2yDssxL/cloud.png" />
      <Image class="mountain" img="https://i.ibb.co/HPp4S51/mountain.png" />
    </div>
  );
}

export default TopContainer;
