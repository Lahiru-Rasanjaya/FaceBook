import React from 'react'
import './rightPane.css'
import CakeIcon from '@mui/icons-material/Cake';

export default function rightPane() {
  return (
    <div className="rightAllContent">
        <div className="allContents">
          <div className="add">
            <span>Sponsored</span>
            <img src="images/sponsered.webp" alt="Sponsored_image" className="sponsorImage" />
            <span className="SponserDescription">
            This is, of course, a very simplified view of the challenges and benefits of sport sponsorship. It's a complex sell-in but one that can bring great reward to the rights holder (the club, athlete, governing body) and the brand if put together correctly. It has to be a genuine partnership with a fair trade of assets, cash and value-in-kind.</span>
          </div>
          <div className="brithday">
            <CakeIcon />
            <span><b>Lahiru Rasanjaya</b> and <b>2 others </b>having brithday today..!</span>
          </div>
          <div className="onlinePerson">
            <img src="images/unnamed.webp" alt="" className="profilePicture" />
            <span className="onlineDot"></span>
            <span>Lahiru Rasanjaya</span>
          </div>
          <div className="onlinePerson">
            <img src="images/unnamed.webp" alt="" className="profilePicture" />
            <span className="onlineDot"></span>
            <span>Lahiru Rasanjaya</span>
          </div>
          <div className="onlinePerson">
            <img src="images/unnamed.webp" alt="" className="profilePicture" />
            <span className="onlineDot"></span>
            <span>Lahiru Rasanjaya</span>
          </div>
          <div className="onlinePerson">
            <img src="images/unnamed.webp" alt="" className="profilePicture" />
            <span className="onlineDot"></span>
            <span>Lahiru Rasanjaya</span>
          </div>
        </div>
    </div>
  )
}
