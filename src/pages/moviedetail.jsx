import React, { useState, useEffect } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import axios from "../modules/axios";

const APIKEY = process.env.REACT_APP_API_KEY;

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
    return <h1>LOADING</h1>;
  }

  const redirect = () => {
    history.push(`/streaming`)
  }

  return (
    <div>

        <h1 >
        {type === 'movie' ? source.title : source.name}  
        </h1>  
        <p>
        { source.overview }  
        </p>
        <button onClick={redirect}>
            PLAY BUTTON
        </button>

      
    </div>
  );
}

export default MovieDetail;
