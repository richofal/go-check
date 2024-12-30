import ListItems from "../data/ListItems";
import Items from "./Items";

function CheckList() {
  return (
    <div className="bg-[#f5efe7] text-[#213555] py-[4rem] px-0 flex justify-between flex-col gap-[3.2rem] items-center">
      <ul className="list-none w-[80%] grid ul-grid gap-[1.2rem] justify-center content-start">
        {ListItems.map((item) => (
          <Items key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default CheckList;
