import React from 'react'
import './addPost.css'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function addPost() {
  return (
    <div>
      <div className="AllContent">
        <div className="userImageAndSearch">
           <img src="/images/unnamed.webp" alt="userImage" className="profilePicture" />
           <input type="text" className="searchBox"  placeholder="What's on your mind?" />
        </div>
        <hr />
        <div className="activityAndPostButton">
          <div className="videoIcon">
            <VideoLibraryIcon />
            <span>Add Photo/Video</span>
          </div>
          <div className="videoIcon">
            <AddLocationAltIcon />
            <span>Add Location</span>
          </div>
          <div className="videoIcon">
            <LocalOfferIcon />
            <span>Add Tag</span>
          </div>
          <div className="videoIcon">
            <LiveTvIcon />
            <span>Go Live</span>
          </div>
          <button className="PostButton">Psot</button>
        </div>
      </div>
    </div>
  )
}
