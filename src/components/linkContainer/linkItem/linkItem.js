import React from "react";
import "./linkItem.css";

function LinkItem(props) {
  return (
    <div
      className="linkItem"
      onClick={() => {
        window.location.href = props.link;
      }}
    >
      <p>{props.linkText}</p>
    </div>
  );
}

export default LinkItem;
