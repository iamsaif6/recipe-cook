import PropType from 'prop-types';
import '../components/Cooks.css';

const Cooks = ({ itemsCook, handleRemoveCook, removeCook }) => {
  // Calculate total cooking time
  let totalTime = 0;
  if (removeCook.length > 0) {
    removeCook.forEach(element => {
      totalTime += parseInt(element.preparing_time);
    });
  }

  // Calculate total calories
  let totalCalories = 0;
  if (removeCook.length > 0) {
    removeCook.forEach(element => {
      totalCalories += parseInt(element.calories);
    });
  }
  return (
    <div className="md:w-2/5 w-full border rounded-2xl py-9 pb-10 md:pb-[50px] md:py-8 self-baseline md:sticky md:top-8">
      <h2 className="text-[#282828] text-center text-[24px] font-semibold border-b max-w-[350px] mx-auto pt-0 md:pt-4 py-6 mb-6">
        Want to Cook : {itemsCook.length}
      </h2>
      <div>
        <table className="text-[12px] md:text-[14px] text-[#282828b3] w-full">
          <thead>
            <tr className="text-left">
              {/* <th className="pb-4 invisible">Name</th> */}
              <th colSpan="2" className="pb-4 text-center">
                Name
              </th>
              <th className="pb-4">Time</th>
              <th colSpan="4" className="pb-4">
                Calories
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#28282808]">
            {itemsCook.map((itemCook, idx) => (
              <tr key={itemCook.idx}>
                <td className="px-2 md:px-5 py-4">{idx + 1}</td>
                <td className="pr-2 md:pr-5 py-4">{itemCook.name}</td>
                <td className="pr-3 md:pr-5 py-4">{itemCook.preparing_time} minutes</td>
                <td className="pr-2 md:pr-5 py-4">{itemCook.calories} calories</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemoveCook(itemCook);
                    }}
                    className=" button-cook mr-4"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="text-[#282828] text-center text-[24px] font-semibold border-b max-w-[350px] mx-auto py-4 mb-6">
        Currently Cooking : {removeCook.length}
      </h2>
      <div>
        <table className="text-[12px] md:text-[14px] text-[#282828b3] w-full">
          <thead>
            <tr className="text-left">
              <th className="pb-4 invisible">Name</th>
              <th className="pb-4">Name</th>
              <th className="pb-4">Time</th>
              <th className="pb-4">Calories</th>
            </tr>
          </thead>
          <tbody className="bg-[#28282808]">
            {removeCook.map((itemCooks, idx) => (
              <tr key={itemsCook.recipe_id}>
                <td className="px-5 py-4">{idx + 1}</td>
                <td className="pr-5 py-4">{itemCooks.name}</td>
                <td className="pr-5 py-4">{itemCooks.preparing_time} minutes</td>
                <td className="pr-5 py-4">{itemCooks.calories} calories</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-[#28282808]">
            <tr className="text-[15px]">
              <td className="text-right pr-6 pt-5 pb-6 font-bold" colSpan="3">
                Total = <br />
                {totalTime} minutes
              </td>
              <td className="text-left pr-3 font-bold">
                Total = <br />
                {totalCalories} calories
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

Cooks.propTypes = {
  itemsCook: PropType.array.isRequired,
  handleRemoveCook: PropType.array.isRequired,
  removeCook: PropType.array.isRequired,
};

export default Cooks;
