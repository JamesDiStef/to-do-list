import { FaPlus } from "react-icons/fa";

interface Props {
  newItem: any;
  setNewItem: any;
  handleSubmit: any;
}

const AddItem = ({ newItem, setNewItem, handleSubmit }: Props) => {
  return (
    <form
      className="flex items-center space-x-4 p-4 max-w-sm mx-auto"
      onSubmit={handleSubmit}
    >
      <label htmlFor="addItem" className="sr-only">
        Add Item
      </label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={newItem}
        onChange={(e) => {
          // console.log("ok");
          // handleSubmit(e);
          setNewItem(e.target.value);
        }}
      />
      <button
        type="submit"
        aria-label="Add Item"
        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
