import axios from "axios";
import { useEffect, useState } from "react";
import ApiListItem from "./ApiListItem";

interface ApiListProps {
  name: string;
}

const ApiList: React.FC<ApiListProps> = ({ name }) => {
  const [apiList, setApiList] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const url = `https://api.apis.guru/v2/${name}.json`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((response) => setApiList(Object.values(response["apis"])))
      .catch((error) => setError(error));
  }, [name]);
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  return (
    <>
      <div>
        {apiList.map((api, index) => (
          <ApiListItem api={api} key={index} />
        ))}
      </div>
    </>
  );
};

export default ApiList;
