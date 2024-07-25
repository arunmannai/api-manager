
export interface IApiListItem {
  info: {
    title: string;
    "x-logo": {
      url: string;
    };
  };
}

interface ApiListItemProps {
  api: IApiListItem;
}

const ApiListItem: React.FC<ApiListItemProps> = ({ api }) => {
  const image = api.info["x-logo"]["url"];
  const title = api.info.title;

  return (
    <div className="sidebaritem">
      <img src={image} className="icon-image" />
      <span>{title}</span>
    </div>
  );
};
export default ApiListItem;
