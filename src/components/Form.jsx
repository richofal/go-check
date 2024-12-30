import { useState } from "react";

function Form({ setItems, items }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      const newItem = { id: items.length + 1, title, done: false };
      setItems([...items, newItem]);
      setTitle("");
    }
  };

  return (
    <form
      className="bg-[#93bfcf] py-[2.8rem] px-0 flex items-center justify-center gap-[0.8rem]"
      onSubmit={handleSubmit}
    >
      <h3>Ada yang mau dicatat?</h3>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="Add a note"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="uppercase bg-[#76c7ad] py-[1.2rem] px-[3.2rem] rounded-[10rem] text-[#5a3e2b] text-[1.8rem] font-bold">
        Add
      </button>
    </form>
  );
}

export default Form;
