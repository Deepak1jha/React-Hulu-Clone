import React, {useEffect, useState} from "react";
import "../results/Results.css";
import VideoCard from "../videocard/VideoCard";
import axios from "../../api/axios/axios";

export default function Results({selectedOption}) {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requestData = await axios.get(selectedOption);
      setMovies(requestData.data.results);
    }

    fetchData();
  }, [selectedOption])
  return (
    <div className="results">
      {movies.map((movie) => (<VideoCard movie={movie}/>)
      )}
    </div>
  )

}
