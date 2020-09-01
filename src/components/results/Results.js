import React, {useEffect, useState} from "react";
import "../results/Results.css";
import VideoCard from "../videocard/VideoCard";
import axios from "../../api/axios/axios";
import request from "../../api/request/request";

export default function Results() {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requestData = await axios.get(request.fetchPopular);
      setMovies(requestData.data.results);
    }

    fetchData();
  }, [])
  return (
    <div className="results">
      {movies.map((movie) => (<VideoCard/>)
      )}
    </div>
  )

}
