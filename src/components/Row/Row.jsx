import React, { useState, useEffect } from "react";
import axios from "../../modules/axios";
import { useHistory } from "react-router-dom";
import { Col, Spinner } from "react-bootstrap";

import "./Row.scss";

const base_url_images = "https://image.tmdb.org/t/p/w500/";

function Row({ title, getURL, isSeries }) {
  let history = useHistory();

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const request = await axios.get(getURL);
      if (request.data === null) {
        console.warn("Error");
      }
      setMovies(request.data.results);
    };
    getData();
  }, [getURL]);

  const redirect = (id) => {
    history.push(`/detail/${isSeries ? "tv" : "movie"}/${id}`);
  };

  return (
    <div className="rowComponentWrapper">
      <Col>
        <h2 className="title">{title}</h2>
        {movies ? (
          <div className="rowPosters">
            {movies.map((movie) => (
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
      </Col>
    </div>
  );
}

export default Row;
