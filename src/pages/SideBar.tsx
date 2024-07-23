import { Dispatch, SetStateAction } from "react";
import SideBarItem from "./SideBarItem";

interface SideBarProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  providers: string[];
}

const SideBar: React.FC<SideBarProps> = ({
  visible,
  setVisible,
  providers,
}) => {
  return (
    <>
      {visible && (
        <div className="backdrop" onClick={() => setVisible(false)}></div>
      )}
      <div className={`sidebar ${visible ? "show" : ""}`}>
        <div className="content">
          <h2>Select Provider</h2>
          {providers.map((item) => (
            <SideBarItem name={item} key={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
