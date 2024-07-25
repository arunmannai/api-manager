import { useContext } from "react";
import { SideBarContext } from "./Layout";

const Home = () => {
  const setVisible = useContext(SideBarContext);

  return (
    <div className="center-container">
      <button
        onClick={() => setVisible!(true)}
        type="button"
        className="btn btn-primary"
      >
        Explore web APIs
      </button>
    </div>
  );
};

export default Home;
