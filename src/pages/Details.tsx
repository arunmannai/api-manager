import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SideBarContext } from "./Layout";
import axios from "axios";

const Details = () => {
  const { slug } = useParams();
  const setVisible = useContext(SideBarContext);
  const [details, setDetails] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const provider = slug?.split(":")[0];
    const url = `https://api.apis.guru/v2/${provider}.json`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((details) => setDetails(details["apis"][slug!]))
      .catch((error) => setError(error));
  }, [slug]);

  return (
    <>
      <h1>{slug}</h1>
      <div>Details: {JSON.stringify(details)}</div>
      <div>Error: {JSON.stringify(error)}</div>
      <button onClick={() => setVisible!(true)} type="button">
        Explore more APIs
      </button>
    </>
  );
};

export default Details;
