import React from "react";
import "../Pages/CSS/Overview.css";
import Card from "../Component/Card/Card";
import Calender from "../Component/CalenderComp/Calender";
import Hospital from "../Component/Hospitals/Hospital";
import Notification from "../Component/Notifications/Notification";

const Overview = () => {
  return (
    <>
      <div className="home">
        <div className="left">
          <Card></Card>
          <Calender></Calender>
        </div>
        <div className="right">
          <Hospital></Hospital>
          <Notification></Notification>
        </div>
      </div>
    </>
  );
};

export default Overview;
