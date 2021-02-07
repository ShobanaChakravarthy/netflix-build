import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from "./axios.js"
import reqs from "./requests"

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const req= await axios.get(reqs.fetchNetflixOriginals)
            //find a random number and pass it to the array so that everytime the banner will be unique
            const randomNum = Math.floor(Math.random() * req.data.results.length - 1)
            setMovie(req.data.results[randomNum])
        }
        fetchData();
    }, [])

    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }
    const urll = `("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    return (
        <header 
            className="banner" 
            style={{
                backgroundSize: "cover",
                backgroundImage: `url${urll}`,
                backgroundPosition: "center center"    
            }}
        > 
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview,150)}
                </h1>
            </div>   
            <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner
