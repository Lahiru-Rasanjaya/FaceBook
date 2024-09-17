import React from 'react'
import './leftPane.css'
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FeedIcon from '@mui/icons-material/Feed';
import WorkIcon from '@mui/icons-material/Work';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export default function leftPane() {
  return (
    <div className="leftAllContent">
      <div className="AllLeftIcons">
        <MessageIcon className='icon' />
        <span className="IconName">Message</span>
      </div>
      <div className="AllLeftIcons">
        <GroupIcon className='icon' />
        <span className="IconName">Group</span>
      </div>
      <div className="AllLeftIcons">
        <RssFeedIcon className='icon' />
        <span className="IconName">RssFeed</span>
      </div>
      <div className="AllLeftIcons">
        <FlagIcon className='icon' />
        <span className="IconName">Flag</span>
      </div>
      <div className="AllLeftIcons">
        <CalendarMonthIcon className='icon' />
        <span className="IconName">CalendarMonth</span>
      </div>
      <div className="AllLeftIcons">
        <SettingsIcon className='icon' />
        <span className="IconName">Setting</span>
      </div>
      <div className="AllLeftIcons">
        <SmartToyIcon className='icon' />
        <span className="IconName">SmartToy</span>
      </div>
      <div className="AllLeftIcons">
        <FeedIcon className='icon' />
        <span className="IconName">Feed</span>
      </div>
      <div className="AllLeftIcons">
        <WorkIcon className='icon' />
        <span className="IconName">Work</span>
      </div>
      <div className="AllLeftIcons">
        <LocalGroceryStoreIcon className='icon' />
        <span className="IconName">LocalGroceryStore</span>
      </div>
      <hr />
      <div className="pages">
        <h2>Pages You Likes</h2>
        <div className="imagePageName">
           <img src="/images/unnamed.webp" alt="userImage" className="profilePicture" />
           <span className="pageName">Ruart Design</span>
        </div>
        <div className="imagePageName">
           <img src="/images/unnamed.webp" alt="userImage" className="profilePicture" />
           <span className="pageName">Ruart Design</span>
        </div>
        <div className="imagePageName">
           <img src="/images/unnamed.webp" alt="userImage" className="profilePicture" />
           <span className="pageName">Ruart Design</span>
        </div>
        <div className="imagePageName">
           <img src="/images/unnamed.webp" alt="userImage" className="profilePicture" />
           <span className="pageName">Ruart Design</span>
        </div>
        <div className="imagePageName">
           <img src="/images/unnamed.webp" alt="userImage" className="profilePicture" />
           <span className="pageName">Ruart Design</span>
        </div>
        <div className="imagePageName">
           <img src="/images/unnamed.webp" alt="userImage" className="profilePicture" />
           <span className="pageName">Ruart Design</span>
        </div>
      </div>
    </div>
  )
}
