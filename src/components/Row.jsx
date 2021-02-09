import React, { useState, useEffect} from "react";
import axios from "../axios";
import requests from "../request";
import '../styles/Row.css'
const Row = ({title,fetchUrl,isLargeRow}) => {

    const [movies,setMovies] = useState([]);
    const baseURL = 'https://image.tmdb.org/t/p/original/';
    useEffect( () => {
        async function fetchData() {
            const request  = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);


    return(
        <>
        <h2 className='headings'>{title}</h2>
        <div className='row_posters'>
            {
                movies.map(movie => (
                    <div>
                        <img key={movie.id}
                             className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                             src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                             alt={movie.name} />
                    </div>
                ))
            }
            
        </div>
        </>
    )
}

export default Row;