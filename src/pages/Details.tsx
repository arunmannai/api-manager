import { useParams } from 'react-router-dom';

const Details = () => {
 const { slug } = useParams();

 return <h1>{slug}</h1>;
};

export default Details;