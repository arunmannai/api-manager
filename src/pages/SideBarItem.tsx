import { useState } from "react";
import ApiList from "./ApiList";

interface SideBarItemProps {
  name: string;
}

const SideBarItem: React.FC<SideBarItemProps> = ({ name }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggle = () => setExpanded(!expanded);

  return (
    <>
      <div onClick={toggle}>{name}</div>
      {expanded && <ApiList name={name} />}
    </>
  );
};

export default SideBarItem;
