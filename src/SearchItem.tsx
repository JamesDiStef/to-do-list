interface Props {
  search: string;
  setSearch: any;
}

const SearchItem = ({ search, setSearch }: Props) => {
  return (
    <form
      className="w-1/6 min-w-60 mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="search an item"
        className="flex w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
