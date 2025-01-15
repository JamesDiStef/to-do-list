import { Item } from "./Content";
import LineItem from "./LineItem";

interface Props {
  items: Item[];
  handleCheck: any;
  handleDelete: any;
}

const ItemList = ({ items, handleCheck, handleDelete }: Props) => {
  return (
    <ul className="list-none ml-12 mx-auto text-2xl">
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
