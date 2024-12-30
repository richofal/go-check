import { useState } from "react";
import "./index.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import CheckList from "./components/CheckList";
import Stats from "./components/Stats";
import ListItems from "./data/ListItems";

function App() {
  const [items, setItems] = useState(ListItems);

  const toggleDone = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const totalItems = items.length;
  const completedItems = items.filter((item) => item.done).length;
  const progress =
    totalItems === 0 ? 0 : Math.round((completedItems / totalItems) * 100);

  return (
    <div className="w-[100%] h-[100vh] grid custom-grid-rows">
      <Logo />
      <Form setItems={setItems} items={items} />
      <CheckList items={items} toggleDone={toggleDone} />
      <Stats
        totalItems={totalItems}
        completedItems={completedItems}
        progress={progress}
      />
    </div>
  );
}

export default App;
