
import './App.css';
import Row from './Row';
import request from './Request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Nav />

      {/* banner */}
      <Banner />

      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow = {true}/>
      <Row title="Trending Now" fetchUrl= {request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl= {request.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl= {request.fetchActionMovies}/>
      <Row title="Commedy Movies" fetchUrl= {request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl= {request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl= {request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl= {request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
