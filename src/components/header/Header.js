import React from "react";
import "../header/Header.css";
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

export default function Header() {
  return (
    <div className="header">
      <div className="header_icons">
        <div className="header_icon header_icon--active">
          <HomeIcon/>
          <p>Home</p>
        </div>
      <div className="header_icon ">
        <FlashOnIcon/>
        <p>Trending</p>
      </div>
      <div className="header_icon">
        <LiveTvIcon/>
        <p>Verified</p>
      </div>
      <div className="header_icon">
        <VideoLibraryIcon/>
        <p>Collections</p>
      </div>
      <div className="header_icon">
        <SearchIcon/>
        <p>Search</p>
      </div>
      <div className="header_icon">
        <PersonOutlineIcon/>
        <p>Account</p>
      </div>
      </div>

      {/*</div>*/}
      <img
        src="https://firebasestorage.googleapis.com/v0/b/isstracker-190613.appspot.com/o/EMZE3ZMGWVGI5JMALPGIHVIKM4.png?alt=media&token=23f3f832-961e-480a-becf-f2c8df074d69"
        alt=""/>
    </div>
  )
}
