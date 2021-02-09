import React from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Row from './components/Row'
import requests from "./request";
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Header/>
      <Row 
        title = 'Netflix Originals' 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row 
        title = 'Top rated'
        fetchUrl={requests.fetchTopRated}
      />
      <Row 
        title = 'Action Movies' 
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
      <Row 
        title = 'Comedy Movies' 
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row 
        title = 'Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      
      <Row 
        title = 'Romance Movies' 
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row 
        title = 'Documentaries'
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
      <Footer/>
    </div>
  );
}

export default App;
