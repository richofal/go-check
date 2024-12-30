function Items({ item }) {
  return (
    <li key={item.id} className="flex items-center gap-[1.2rem]">
      <input type="checkbox" />
      <span style={{ textDecoration: item.done ? "line-through" : "" }}>
        {item.title}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Items;
