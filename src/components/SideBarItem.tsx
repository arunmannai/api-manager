import React, { useState } from "react";
import ApiList from "./ApiList";

interface SideBarItemProps {
  name: string;
}

const SideBarItem: React.FC<SideBarItemProps> = ({ name }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggle = () => setExpanded(!expanded);
  const icon = expanded ? "bi-chevron-up" : "bi-chevron-down";
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
