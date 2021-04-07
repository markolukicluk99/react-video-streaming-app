import Row from './components/Row/Row.jsx'
import apiClient from './modules/apiClient'

function App() {
  return (
    <div className="container">
      <h1>Hello 24i!</h1>
      <Row title="Popular Movies" getURL={apiClient.getMovieList} />
      <Row title="Popular Series" getURL={apiClient.getTVList} />
      <Row title="Family" getURL={apiClient.getFamilyMovies} />
      <Row title="Documentaries" getURL={apiClient.getDocumentaryMovies} />


    </div>
  );
}

export default App;
