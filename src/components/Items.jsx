import { useEffect, useState } from 'react';
import Item from './Item';
import PropType from 'prop-types';

const Items = ({ handleCook }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('index.json')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div className="md:w-3/5 w-full">
      <div className="grid grid-cols-2 gap-6">
        {items.map((items, idx) => (
          <Item key={idx} handleCook={handleCook} items={items}></Item>
        ))}
      </div>
    </div>
  );
};

Items.propTypes = {
  handleCook: PropType.array.isRequired,
};
export default Items;
