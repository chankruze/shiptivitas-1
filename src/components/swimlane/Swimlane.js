import React from "react";
import { Card } from "../card/Card";
import "./Swimlane.css";

export const Swimlane = ({ clients, name, dragulaRef }) => {
  return (
    <div className="swimlane-column">
      <div className="swimlane-title">{name}</div>
      <div className="swimlane-dragColumn" ref={dragulaRef}>
        {clients.map((client) => {
          return (
            <Card
              key={client.id}
              id={client.id}
              name={client.name}
              description={client.description}
              status={client.status}
            />
          );
        })}
      </div>
    </div>
  );
};
