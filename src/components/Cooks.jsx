import '../components/Cooks.css';

const Cooks = ({ itemsCook, handleRemoveCook, removeCook }) => {
  const removeCook2 = removeCook;
  return (
    <div className="md:w-2/5 border rounded-2xl py-8">
      <h2 className="text-[#282828] text-center text-[24px] font-semibold border-b max-w-[350px] mx-auto py-4 mb-6">
        Want to cook : {itemsCook.length}
      </h2>
      <div>
        <table className="text-[14px] text-[#282828b3] w-full">
          <thead>
            <tr className="text-left">
              <th className="pb-4 invisible">Name</th>
              <th className="pb-4">Name</th>
              <th className="pb-4">Time</th>
              <th className="pb-4">Calories</th>
            </tr>
          </thead>
          <tbody className="bg-[#28282808]">
            {itemsCook.map((itemCook, idx) => (
              <tr>
                <td className="px-5 py-4">{idx + 1}</td>
                <td className="pr-5 py-4">{itemCook.name}</td>
                <td className="pr-5 py-4">{itemCook.preparing_time} minutes</td>
                <td className="pr-5 py-4">{itemCook.calories} calories</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemoveCook(itemCook);
                    }}
                    className="button-cook"
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
        Currently cooking : {removeCook.length}
      </h2>
      <div>
        <table className="text-[14px] text-[#282828b3] w-full">
          <thead>
            <tr className="text-left">
              <th className="pb-4 invisible">Name</th>
              <th className="pb-4">Name</th>
              <th className="pb-4">Time</th>
              <th className="pb-4">Calories</th>
            </tr>
          </thead>
          <tbody className="bg-[#28282808]">
            {removeCook2.map(itemCooks => (
              <tr>
                <td className="px-5 py-4">1</td>
                <td className="pr-5 py-4">{itemCooks.name}</td>
                <td className="pr-5 py-4">{itemCooks.preparing_time} minutes</td>
                <td className="pr-5 py-4">{itemCooks.calories} calories</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="text-center" colspan="3">
                Total Time = <br />
                45 minutes
              </td>
              <td class="right">200</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cooks;

// <tr>
//   <td className="px-5 py-4"></td>
//   <td className="pr-5 py-4">{itemCooks.name}</td>
//   <td className="pr-5 py-4">{itemCooks.preparing_time} minutes</td>
//   <td className="pr-5 py-4">{itemCooks.calories} calories</td>
// </tr>;
