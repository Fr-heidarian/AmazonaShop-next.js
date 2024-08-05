export default function SearchBox() {
  return (
    <form>
      <select className="bg-grayBgColor p-4 rounded-lg text-white">
        <option value={"all"}>All</option>
      </select>
      <input
        type="text"
        placeholder="Search"
        className="bg-grayBgColor w-48 p-4 rounded-lg"
      />
      <button className="bg-grayBgColor text-white p-4 rounded-lg">Search</button>
    </form>
  );
}
