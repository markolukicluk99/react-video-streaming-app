import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "../modules/axios";
import { Spinner } from "react-bootstrap";

import "./search.scss";

const APIKEY = process.env.REACT_APP_API_KEY;
const base_url_images = "https://image.tmdb.org/t/p/w500/";

function Search() {
  let history = useHistory();
  let { value } = useParams();

  const [searchResult, setSearchResult] = useState(null);

  const getURL = `search/movie?api_key=${APIKEY}&language=en-US&query=${
    value === undefined ? null : value
  }&page=1&include_adult=false`;

  useEffect(() => {
    const getData = async () => {
      const request = await axios.get(getURL);
      setSearchResult(request.data.results);
      if (request.data === null || undefined) {
        console.warn("Error");
      }
    };
    getData();
  }, [getURL]);

  if (searchResult === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  const redirect = (id) => {
    history.push(`/detail/movie/${id}`);
  };

  return (
    <div className="rowComponentWrapper searchWrapper">
      <h2 className="title">Searched for: {value}</h2>
      {searchResult != null ? (
        <div className="rowPosters">
          {searchResult.map((movie) => (
            <img
              onClick={() => redirect(movie.id)}
              key={movie.id}
              className="rowPoster"
              src={`${base_url_images}${movie.poster_path}`}
              alt={movie.title}
            />
          ))}
        </div>
      ) : (
        <div>
          <h1>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </h1>
        </div>
      )}
    </div>
  );
}

export default Search;
