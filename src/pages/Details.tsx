import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SideBarContext } from "./Layout";
import axios from "axios";

interface IDetails {
  info: {
    title: string;
    description: string;
    "x-logo": {
      url: string;
    };
    contact: {
      email: string;
      name: string;
      url: string;
    };
  };
  swaggerUrl: string;
}

const Details = () => {
  const { slug } = useParams();
  const setVisible = useContext(SideBarContext);
  const [details, setDetails] = useState<IDetails>();
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

  const image = details?.info["x-logo"]["url"];
  const title = details?.info.title;
  const description = details?.info.description;
  const swaggerUrl = details?.swaggerUrl;
  const contact: { email: string; name: string; url: string } | undefined =
    details?.info.contact;

  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  if (!details) return <div>Loading...</div>;

  return (
    <>
      <div className="details-container">
        <h2 className="text-center">
          <img src={image} alt={title} className="icon-image1" /> {title}
        </h2>
        <div className="mt-3">
          <h4>Description</h4>
          <div dangerouslySetInnerHTML={{ __html: description! }} />
        </div>
        <div className="mt-3">
          <h4>Swagger</h4>
          <div>{swaggerUrl}</div>
        </div>
        {contact && (
          <div className="mt-3">
            <h4>Contact</h4>
            <table className="mb-3">
              <tr>
                <td>Email</td>
                <td>{contact.email}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{contact.name}</td>
              </tr>
              <tr>
                <td>Url</td>
                <td>{contact.url}</td>
              </tr>
            </table>
          </div>
        )}
      </div>
      <div className="btn-center1">
        <button
          onClick={() => setVisible!(true)}
          type="button"
          className="btn btn-primary"
        >
          Explore more APIs
        </button>
      </div>
    </>
  );
};

export default Details;
