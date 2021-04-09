import React from "react";
import "./homepage.scss";
import Row from "../components/Row/Row";
import apiClient from "../modules/apiClient";

function Homepage() {
  return (
    <div className="homepageWrapper">
      <Row title="Popular Movies" getURL={apiClient.getMovieList} />

      <Row
        title="Popular Series"
        getURL={apiClient.getTVList}
        isSeries={true}
      />

      <Row title="Family" getURL={apiClient.getFamilyMovies} />

      <Row title="Documentaries" getURL={apiClient.getDocumentaryMovies} />
    </div>
  );
}

export default Homepage;
