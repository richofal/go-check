import Items from "./Items";

function CheckList({ items, toggleDone }) {
  return (
    <div className="bg-[#f5efe7] text-[#213555] py-[4rem] px-0 flex justify-between flex-col gap-[3.2rem] items-center">
      {items.length === 0 ? (
        <p>List is empty. Add some tasks!</p>
      ) : (
        <ul className="list-none w-[80%] grid ul-grid gap-[1.2rem] justify-center content-start">
          {items.map((item) => (
            <Items key={item.id} item={item} toggleDone={toggleDone} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default CheckList;
