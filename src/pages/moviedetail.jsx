import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "../modules/axios";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";

import "./moviedetail.scss";

const APIKEY = process.env.REACT_APP_API_KEY;
const base_url_images = "https://image.tmdb.org/t/p/w500/";

function MovieDetail() {
  let history = useHistory();
  let { type, id } = useParams();

  const [source, setSource] = useState(null);

  const getURL = `/${type}/${id}?api_key=${APIKEY}&language=en-US`;

  useEffect(() => {
    const getData = async () => {
      const request = await axios.get(getURL);
      setSource(request.data);
      console.log(request.data);
    };
    getData();
  }, [getURL]);

  if (source === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  const redirect = () => {
    history.push(`/streaming`);
  };

  return (
    <div className="movieDetailWrapper">
      <Container>
        <Row>
          <Col sm={6}>
            <h1 className="header">
              {type === "movie" ? source.title : source.name}
            </h1>
            <p className="paragraph">{source.overview}</p>
            <Button variant="primary" onClick={redirect}>
              PLAY TRAILER
            </Button>
          </Col>
          <Col sm={4}>
            <img
              src={`${base_url_images}${source.poster_path}`}
              alt={type === "movie" ? source.title : source.name}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MovieDetail;
