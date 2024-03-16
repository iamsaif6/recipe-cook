import { IoMdTime } from 'react-icons/io';
import { SlFire } from 'react-icons/sl';
import '../components/Item.css';

const Item = ({ items, handleCook }) => {
  const { name, description, recipe_img, ingredients, preparing_time, calories } = items;
  return (
    <div className="border rounded-2xl p-6">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div style={{ backgroundImage: `url(${recipe_img})` }} className="bg-cover bg-no-repeat  item_img">
            {/* <img src={recipe_img} alt="" /> */}
          </div>
          <h3 className="text-[#282828] text-[20px] mb-4">{name}</h3>
          <p className="text-[#878787] font-normal mb-4">{description}</p>
          <hr className="mb-6"></hr>
          <p className="text-[#282828] text-[16px] font-medium">Ingredients : {ingredients.length}</p>
          <ul className="text-[#878787] text-[16px] font-light list-disc pl-6 space-y-2 my-4">
            {ingredients.map(single => (
              <li>{single}</li>
            ))}
          </ul>
          <hr></hr>
          <div className="text-[#150b2b99] text-[16px] flex items-center gap-5 my-6">
            <p>
              <IoMdTime className="inline text-[20px] mr-2" />
              {preparing_time} minutes
            </p>
            <p>
              <SlFire className="inline text-[20px] mr-2" /> {calories + ` `}
              calories
            </p>
          </div>
        </div>
        <div className="text-left">
          <button
            onClick={() => {
              handleCook(items);
            }}
            className="button_item"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
