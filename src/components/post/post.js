import React from 'react'
import './post.css'

export default function post() {
  return (
    <div>
        <div className="AllContent">
            <div className="logoNameTime">
               <img src="images/unnamed.webp" alt="userImage" className="profilePicture" />
               <span className="name">Lahiru Rasanjaya</span>
               <span className="time">5min ago</span>
            </div>
           <div className="imageContent">
                <div className="userUploadImage">
                    <span className="description">Hi, I'm Lahiru Rasanjaya</span>
                    <img src="images/unnamed.webp" alt="userIange" className="useerImag" />
                </div>
           </div>
            <div className="reactAndComments">
                <div className="react">
                    <span>😂</span>
                    <span>😍</span>
                    <span>❤️️</span>
                    <span>Lahiru and 200 others</span></div>
                <div className="comments">
                    <span>15 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
