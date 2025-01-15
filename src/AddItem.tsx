import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

interface Props {
  newItem: any;
  setNewItem: any;
  handleSubmit: any;
}

const AddItem = ({ newItem, setNewItem, handleSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex items-center space-x-4 p-4 max-w-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <label htmlFor="addItem" className="sr-only">
        Add Item
      </label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => {
          if (inputRef.current) inputRef.current.focus();
        }}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
