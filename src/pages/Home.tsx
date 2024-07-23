import { useContext } from "react";
import { SideBarContext } from "./Layout";

const Home = () => {
  const setVisible = useContext(SideBarContext);

  return (
    <button onClick={() => setVisible!(true)} type="button">
      Explore web APIs
    </button>
  );
};

export default Home;
