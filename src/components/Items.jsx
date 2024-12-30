function Items({ item, toggleDone }) {
  return (
    <li className="flex items-center gap-[1.2rem]">
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => toggleDone(item.id)}
      />
      <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
        {item.title}
      </span>
    </li>
  );
}

export default Items;
