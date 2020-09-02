import React, {useEffect, useState} from "react";
import "../results/Results.css";
import VideoCard from "../videocard/VideoCard";
import axios from "../../api/axios/axios";
import FlipMove from "react-flip-move";

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
      <FlipMove>
        {movies.map((movie) => (<VideoCard key={movie.id} movie={movie}/>)
        )}
      </FlipMove>
    </div>
  )

}
