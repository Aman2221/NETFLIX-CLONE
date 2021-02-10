import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request"
import '../styles/Header.css'
const Header = () => {
    const [movies,setMovies] = useState([]);

    useEffect( () => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
        }
        fetchData();
        console.log(movies);
    }, [])
    return(
        <>
        <header className='banner'
        style={{
            backgroundImage : `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        }}
        >
           <div className="banner_content">
                <h1>{movies?.title || movies?.name}</h1>
                <div classname='banner_buttons'>
                    <button classname='banner_button'>Play</button>
                    <button classname='banner_button'>My List</button>
                </div>
                <h4 className="banner_desc">{movies.overview}</h4>
                
           </div>
           <div className='banner--fadeBottom'/>
        </header>
        </>
    );
}

export default Header;