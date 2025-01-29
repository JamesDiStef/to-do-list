import ItemList from "./ItemList";

interface Props {
  items: Item[];
  handleCheck: any;
  handleDelete: any;
}

export interface Item {
  id: any;
  item: string;
  checked: boolean;
}

const Content = ({ items, handleCheck, handleDelete }: Props) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Empty</p>
      )}
    </>
  );
};

export default Content;
