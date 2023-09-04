import React from "react";

export const Navigation = ({ onClick, selectedTab }) => {
  return (
    <ul className="nav nav-tabs" id="nav-tab" role="tablist">
      <li className="nav-item">
        <a
          className={"nav-link " + (selectedTab === "home" ? "active" : "")}
          onClick={() => onClick("home")}
          id="home-tab"
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected={selectedTab === "home"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          className={
            "nav-link " + (selectedTab === "shipping-requests" ? "active" : "")
          }
          onClick={() => onClick("shipping-requests")}
          id="shipping-requests-tab"
          data-toggle="tab"
          href="#shipping-requests"
          role="tab"
          aria-controls="shipping-requests"
          aria-selected={selectedTab === "shipping-requests"}
        >
          Shipping Requests
        </a>
      </li>
    </ul>
  );
};
