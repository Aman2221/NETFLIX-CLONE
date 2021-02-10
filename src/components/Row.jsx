import React, { useState, useEffect} from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import movieTrailer from 'movie-trailer'
import '../styles/Row.css'
const Row = ({title,fetchUrl,isLargeRow}) => {

    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState();
    const baseURL = 'https://image.tmdb.org/t/p/original/';
    useEffect( () => {
        async function fetchData() {
            const request  = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    const opts = {
        height : "390",
        width : '100%',
        playerVars : {
            autoplay: 1
        },
    };
     
    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }
        else{
            movieTrailer(movie?.name || "" )
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
    return(
        <>
        <h2 className='headings'>{title}</h2>
        <div className='row_posters'>
            {
                movies.map(movie => (
                    <div>
                        <div>
                            <img key={movie.id} onClick={handleClick}
                                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                                src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name} />
                        </div>
                        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
                    </div>
                ))
            }
            
        </div>
        </>
    )
}

export default Row;