import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import Footer from "./components/Footer/Footer";
import Requests from "./Requests";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />

      <div className="app__content">
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={Requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
