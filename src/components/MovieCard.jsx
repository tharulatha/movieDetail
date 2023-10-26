import React from 'react'

const MovieCard = ({movie}) => {
    return (
        <div className="movieContainer">
        <div className="movieYear">
          <p>{movie.Year}</p>
        </div>
        <div className="postercard">
          <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt="moviePoster" className="poster" />
        </div>
        <div className="movieTitle">
          <span>{movie.Title}</span>
        </div>
      </div>
    )
}

export default MovieCard