import React from "react";
import "./Card.css";

export const Card = ({ id, name, status }) => {
  let classNames = ["Card"];

  if (status === "backlog") {
    classNames.push("Card-grey");
  } else if (status === "in-progress") {
    classNames.push("Card-blue");
  } else if (status === "complete") {
    classNames.push("Card-green");
  }

  return (
    <div className={classNames.join(" ")} data-id={id} data-status={status}>
      <div className="Card-title">{name}</div>
    </div>
  );
};
