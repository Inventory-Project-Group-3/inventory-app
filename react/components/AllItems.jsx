// src/components/AllItems.jsx
import axios from 'axios';

function AllItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/items')
      .then(response => setItems(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <p>{item.category}</p>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
}

export default AllItems;
