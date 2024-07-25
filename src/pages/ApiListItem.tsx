interface ApiListItemProps {
  api: {
    info: {
      title: string;
      "x-logo": {
        url: string;
      };
    };
  };
}

const ApiListItem: React.FC<ApiListItemProps> = ({ api }) => {
  const image = api.info["x-logo"]["url"];
  const title = api.info.title;

  return (
    <>
      <div className="sidebaritem">
        <img src={image} alt={title} className="icon-image" />
        <span>{title}</span>
      </div>
    </>
  );
};
export default ApiListItem;
