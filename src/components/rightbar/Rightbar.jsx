import React from "react";
import Rightbarhome from "../rightbarhome/Rightbarhome";
import ProfileRightBar from "../profileRightBar/ProfileRightBar";
import "./rightbar.scss";

const Rightbar = ({ profile }) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <Rightbarhome />}
      </div>
    </div>
  );
};

export default Rightbar;
