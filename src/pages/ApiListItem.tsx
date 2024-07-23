interface ApiListItemProps {
 api:  {
  info: {
    title: string,
    "x-logo": {
      url: string
    }
  }
}
}


const ApiListItem: React.FC<ApiListItemProps> = ({ api }) => {
 const image = api.info["x-logo"]["url"];
 const title = api.info.title;

 return <>
 <img src={image} />
 <span>{title}</span>
 </>
}
export default ApiListItem;