import React from "react";
import "./home.css";
import NavBar from "../../components/NavBar/navBar";
import LeftPane from "../../components/leftPane/leftPane";
import RightPane from "../../components/rightPane/rightPane";
import PostPane from "../../components/postPane/postPane";

export default function home() {
  return (
    <div>
      <NavBar />
      <div className="bodyContainer">
        <LeftPane />
        <PostPane />
        <RightPane />
      </div>
    </div>
  );
}
