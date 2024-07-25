import axios from "axios";
import { useEffect, useState } from "react";
import ApiListItem from "./ApiListItem";
import { Link } from "react-router-dom";


interface ApiListProps {
  name: string;
}
interface Api {
 name: string;
}
const ApiList: React.FC<ApiListProps> = ({ name }) => {
 const [apiList, setApiList] = useState<Api[]>([]);
  const [error, setError] = useState();
  const [slugs, setSlugs] = useState([]);

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
     <Link to={`/${slugs[index]}`} key={index}>
       <ApiListItem api={api} />
     </Link>
   ))}
 </div>
  );
};

export default ApiList;
