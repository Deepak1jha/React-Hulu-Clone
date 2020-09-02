import React from "react";
import "../navbar/Navbar.css";
import request from "../../api/request/request";

export default function Navbar({setSelectedOption}) {
  return (
    <div className="navbar">
      <h2 onClick={()=>setSelectedOption(request.fetchTrending)}>Trending</h2>
      <h2 onClick={()=>setSelectedOption(request.fetchTopRated)}>Top-Related</h2>
      <h2>Action</h2>
      <h2>Comedy</h2>
      <h2>Horror</h2>
      <h2>Romance</h2>
      <h2>Mystery</h2>
      <h2>Bollywood</h2>
      <h2>Crime</h2>
      <h2>Sports</h2>
      <h2>Biography</h2>
    </div>
  )
}
