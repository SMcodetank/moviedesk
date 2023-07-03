import React from 'react'

export const MovieCard = ({ movie }) => {
    return (
        <div className="movieCard">
            <img src={movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300x400"} alt={movie.Title} title={movie.Title} />
            <h3 style={{ marginTop: "15px" }}>{movie.Title} ({movie.Year})</h3>
            <p style={{ textTransform: "capitalize" }}><strong>Type:</strong> {movie.Type}</p>
        </div>
    )
}
