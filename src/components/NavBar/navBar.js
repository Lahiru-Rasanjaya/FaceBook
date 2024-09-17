import React from "react";
import './navBar.css'
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';

export default function navBar() {
  return (
    <div>
      <nav className="Contend">
        <div className="navBarLeft">
          <span>Facebook</span>
        </div>

        <div className="navBarCenter">
          <PersonSearchIcon className="searchIcon" />
          <input
            type="text"
            placeholder="Enter for your Friend"
            className="searchBar"
          />
        </div>

        <div className="navBarRight">
          <div className="twoPagesAndIcons">
            <span>HomePage</span>
            <span>Profile</span>
            <div className="navIcons">
                <PersonIcon className="icons" />
                <spam className="iconNumer">5</spam>
            </div>
            <div className="navIcons">
                <MessageIcon className="icons" />
                <spam className="iconNumer">3</spam>
            </div>
            <div className="navIcons">
                <SettingsIcon className="icons" />
                <spam className="iconNumer">1</spam>
            </div>
            <div className="profilePic">
                <img src="/images/unnamed.webp" alt="userImage" className="profilePicture" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
