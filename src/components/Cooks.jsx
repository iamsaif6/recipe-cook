const Cooks = ({ itemsCook }) => {
  console.log(itemsCook);
  return (
    <div className="md:w-2/5 border rounded-2xl py-8">
      <h2 className="text-[#282828] text-center text-[24px] font-semibold">Want to cook : {itemsCook.length} </h2>
    </div>
  );
};

export default Cooks;
