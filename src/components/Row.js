import React, { useEffect, useState } from 'react';
import axios from "./axios"
import "./Row.css";

const baseURL="https://image.tmdb.org/t/p/original/"

function Row({title,fetchURL,isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");
    // a snippet of code which runs based on a specific condition or variable
    useEffect(() => {
        async function fetchData(){
            const req=await axios.get(fetchURL)
            setMovies(req.data.results)
            return req;
        }
        fetchData();

    }, [fetchURL])

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>
            {/* container -> posters */}
            <div className="row__posters">
                {movies.map(movie=>(
                <img
                    key={movie.id}
                    className={`row__poster ${isLargeRow && `row__posterLarge`}`}
                    src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} 
                />
                ))}
            </div>
        </div>
    )
}

export default Row;