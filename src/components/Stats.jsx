function Stats({ totalItems, completedItems, progress }) {
  return (
    <div className="bg-[#d8c4b6] text-center font-bold py-[3.2rem] px-0">
      <span>
        🗒️ Kamu punya {totalItems} catatan dan {completedItems} yang dichecklist
        ({progress}%) ✅
      </span>
    </div>
  );
}

export default Stats;
