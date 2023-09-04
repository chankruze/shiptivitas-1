import "dragula/dist/dragula.css";
import React, { createRef, useEffect, useState } from "react";
import { getClients } from "../../lib/clients";
import { Swimlane } from "../swimlane/Swimlane";
import "./Board.css";

export const Board = () => {
  const [clients, setClients] = useState([]);
  const [backlogs, setBacklogs] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const clients = getClients();
    setClients(clients);
  }, []);

  useEffect(() => {
    setBacklogs(
      clients.filter((client) => !client.status || client.status === "backlog")
    );
    setInProgress(
      clients.filter(
        (client) => client.status && client.status === "in-progress"
      )
    );
    setCompleted(
      clients.filter((client) => client.status && client.status === "complete")
    );
  }, [clients]);

  const backlogRef = createRef(null);
  const inProgressRef = createRef(null);
  const completedRef = createRef(null);

  return (
    <div className="Board">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Swimlane
              name="Backlog"
              clients={backlogs}
              dragulaRef={backlogRef}
            />
          </div>
          <div className="col-md-4">
            <Swimlane
              name="In Progress"
              clients={inProgress}
              dragulaRef={inProgressRef}
            />
          </div>
          <div className="col-md-4">
            <Swimlane
              name="Complete"
              clients={completed}
              dragulaRef={completedRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
