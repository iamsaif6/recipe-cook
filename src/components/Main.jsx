import { useState } from 'react';
import Cooks from './Cooks';
import Items from './Items';

const Main = () => {
  const [itemsCook, setItemsCook] = useState([]);

  const handleCook = item => {
    const newItem = [...itemsCook, item];
    setItemsCook(newItem);
  };
  return (
    <main className="my-[100px]">
      <div className="max-w-[820px] mx-auto text-center">
        <h2 className="text-[#150B2B] text-[40px] font-semibold mb-6">Our Recipes</h2>
        <p className="text-[#150b2b99] font-normal text-[16px]">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </div>
      <div className="flex gap-8 my-12">
        <Items handleCook={handleCook}></Items>
        <Cooks itemsCook={itemsCook}></Cooks>
      </div>
    </main>
  );
};

export default Main;
