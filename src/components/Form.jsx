import handleSubmit from "../utils/handleSubmit";

function Form() {
  return (
    <form
      className="bg-[#93bfcf] py-[2.8rem] px-0 flex items-center justify-center gap-[0.8rem]"
      onSubmit={handleSubmit}
    >
      <h3>Ada yang mau dicatat?</h3>
      <input type="text" />
      <button className="uppercase bg-[#76c7ad] py-[1.2rem] px-[3.2rem] rounded-[10rem] text-[#5a3e2b] text-[1.8rem] font-bold">
        Add
      </button>
    </form>
  );
}

export default Form;
