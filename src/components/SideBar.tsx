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
      <div className="sidebar">
        <div className={`sidebar ${visible ? "show" : ""}`}>
          <div className="content">
            <h3 className="text-center">Select Provider</h3>
            {providers.map((item) => (
              <SideBarItem name={item} key={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
