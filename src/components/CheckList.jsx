function CheckList() {
  return (
    <div className="bg-[#f5efe7] text-[#213555] py-[4rem] px-0 flex justify-between flex-col gap-[3.2rem] items-center">
      <ul className="list-none w-[80%] grid ul-grid gap-[1.2rem] justify-center content-start">
        <li className="flex items-center gap-[1.2rem]">Makan</li>
        <li className="flex items-center gap-[1.2rem]">Tidur</li>
        <li className="flex items-center gap-[1.2rem]">Ngoding</li>
      </ul>
    </div>
  );
}

export default CheckList;
