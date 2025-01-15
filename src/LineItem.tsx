import { FaTrashAlt } from "react-icons/fa";

interface Props {
  item: Item;
  handleCheck: any;
  handleDelete: any;
}

export interface Item {
  id: any;
  item: string;
  checked: boolean;
}

const LineItem = ({ item, handleCheck, handleDelete }: Props) => {
  return (
    <li className="flex items-center justify-between mb-2 pr-12">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleCheck(item.id)}
          className="mr-2 cursor-pointer"
        />
        <label
          onDoubleClick={() => handleCheck(item.id)}
          className={`cursor-pointer ${item.checked ? "line-through" : ""}`}
        >
          {item.item}
        </label>
      </div>
      <div className="pl-5">
        <FaTrashAlt
          onClick={() => handleDelete(item.id)}
          role="button"
          tabIndex={0}
          aria-label="Delete ${item.item}"
        />
      </div>
    </li>
  );
};

export default LineItem;
