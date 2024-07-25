import React, { useState } from "react";
import ApiList from "./ApiList";
import "../index.css";

interface SideBarItemProps {
  name: string;
}

const SideBarItem: React.FC<SideBarItemProps> = ({ name }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggle = () => setExpanded(!expanded);
  const icon = expanded ? "bi-chevron-down" : "bi-chevron-up";
  const buttonClass = expanded ? "dropdown-button active" : "dropdown-button";

  return (
    <>
      <div onClick={toggle} className={buttonClass}>
        {name}
        <i className={`bi ${icon}`}></i>
      </div>

      {expanded && <ApiList name={name} />}
       </>
  );
};

export default SideBarItem;
