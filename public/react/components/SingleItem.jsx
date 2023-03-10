// src/components/SingleItem.jsx
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SingleItem() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`/api/items/id/${id}`)
      .then(response => setItem(response.data))
      .catch(error => console.log(error));
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <p>{item.category}</p>
      <img src={item.image} alt={item.title} />
    </div>
  );
}

export default SingleItem;
