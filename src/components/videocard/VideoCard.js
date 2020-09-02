import React from "react";
import "../videocard/VideoCard.css";
import TextTruncate from 'react-text-truncate';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export default function VideoCard({movie}) {
  console.table(movie)
  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="Movie poster"/>
      <TextTruncate
        line={1}
        element="p"
        truncateText="...."
        text={movie.overview}
      />
      <h2>{movie.original_title || movie.title}</h2>
      <p className="videoCard_stats">
        {movie.media_type && `${movie.media_type}`}
        {movie.release_date || movie.first_air_date}
        <ThumbUpIcon/>{" "}{movie.vote_count}</p>

    </div>
  )

}
