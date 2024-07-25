import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react";
import axios from "axios";

export const SideBarContext = createContext<
  Dispatch<SetStateAction<boolean>> | undefined
>(undefined);

const Layout = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [providers, setProviders] = useState<string[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    const url = "https://api.apis.guru/v2/providers.json";
    axios
      .get(url)
      .then((response) => response.data)
      .then((providers) => setProviders(providers["data"]))
      .catch((error) => setError(error));
  }, []);

  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <>
      <SideBar
        visible={visible}
        setVisible={setVisible}
        providers={providers}
      />
      <SideBarContext.Provider value={setVisible}>
        <Outlet />
      </SideBarContext.Provider>
    </>
  );
};

export default Layout;
