import { useState } from 'react';
import Cooks from './Cooks';
import Items from './Items';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast.error('Recipe Already Exists!');
const notify2 = () => toast.success('Selected Recipe Added');
const notify3 = () => toast.info('Hooray!! Recipe Sent For Cooking');

const Main = () => {
  const [itemsCook, setItemsCook] = useState([]);
  const [removeCook, setRemoveCook] = useState([]);

  const handleRemoveCook = cook => {
    notify3();
    const newRemoveCook = [...removeCook, cook];
    setRemoveCook(newRemoveCook);
    const newCook = itemsCook.filter(item => cook.recipe_id !== item.recipe_id);
    setItemsCook(newCook);
  };

  // console.log(itemsCook, removeCook);

  const handleCook = item => {
    if (itemsCook.find(itemd => itemd.recipe_id === item.recipe_id)) {
      notify();
      setItemsCook(itemsCook);
    } else {
      notify2();
      const newItem = [...itemsCook, item];
      setItemsCook(newItem);
    }
  };
  return (
    <main className="my-[60px] md:my-[100px]">
      <div className="max-w-[820px] mx-auto text-center">
        <h2 className="text-[#150B2B] text-[35px] md:text-[40px] font-semibold mb-6">Our Recipes</h2>
        <p className="text-[#150b2b99] font-normal text-[16px]">
          Our Recipes has something to tantalize your taste buds. From quick and easy weekday meals to elaborate gourmet creations, each
          recipe is thoughtfully curated
        </p>
      </div>
      <div className="flex md:flex-row flex-col-reverse gap-8 my-12">
        <Items handleCook={handleCook}></Items>
        <Cooks removeCook={removeCook} handleRemoveCook={handleRemoveCook} itemsCook={itemsCook}></Cooks>
      </div>
    </main>
  );
};

export default Main;
