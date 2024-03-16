import { useEffect, useState } from 'react';
import Item from './Item';

const Items = ({ handleCook }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('index.json')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div className="md:w-3/5">
      <div className="grid grid-cols-2 gap-6">
        {items.map(items => (
          <Item handleCook={handleCook} items={items}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
