import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ApiListItem, { IApiListItem } from "./ApiListItem";
import { Link } from "react-router-dom";
import { SideBarContext } from "./Layout";

interface ApiListProps {
  name: string;
}
const ApiList: React.FC<ApiListProps> = ({ name }) => {
  const [apiList, setApiList] = useState<IApiListItem[]>([]);
  const [slugs, setSlugs] = useState<string[]>([]);
  const [error, setError] = useState();
  const setVisible = useContext(SideBarContext);

  useEffect(() => {
    const url = `https://api.apis.guru/v2/${name}.json`;
    axios
      .get(url)
      .then((response) => {
        const apis = response.data.apis;
        setApiList(Object.values(apis));
        setSlugs(Object.keys(apis));
      })
      .catch((error) => setError(error));
  }, [name]);

  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  return (
    <div className="dropdown-button1">
      {apiList.map((api, index) => (
        <Link to={`/${slugs[index]}`} key={index} onClick={() => setVisible!(false)}>
          {JSON.stringify(error)}
          <ApiListItem api={api} />
        </Link>
      ))}
    </div>
  );
};

export default ApiList;
