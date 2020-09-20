import React from "react";
import "../navbar/Navbar.css";
import request from "../../api/request/request";

export default function Navbar({setSelectedOption}) {
  return (
    <div className="navbar">
      <h2 onClick={()=>setSelectedOption(request.fetchTrending)}>Trending</h2>
      <h2 onClick={()=>setSelectedOption(request.fetchTopRated)}>Top-Related</h2>
      <h2 onClick={()=>setSelectedOption(request.fetchActionMovies)}>Action</h2>
      <h2 onClick={()=>setSelectedOption(request.fetchComedyMovies)}>Comedy</h2>
      <h2 onClick={()=>setSelectedOption(request.fetchHorrorMovies)}>Horror</h2>
      <h2 onClick={()=>setSelectedOption(request.fetchRomanceMovies)}>Romance</h2>
      <h2 onClick={()=>setSelectedOption(request.fetchMysteryMovies)}>Mystery</h2>
      <h2 onClick={()=>setSelectedOption(request.fetchSciFiMovies)}>Sci fi</h2>
    </div>
  )
}
