export default function SearchBox() {
  return (
    <form>
      <select className="btn btn-neutral">
        <option value={"all"}>All</option>
      </select>
      <input
        type="text"
        placeholder="Search"
        className="bg-neutral text-grayHoverColor w-48 p-3 rounded-lg"
      />
      <button className="btn btn-neutral">Search</button>
    </form>
  );
}
