import { useState } from "react";
import Header from "./Header";
import Content, { Item } from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList") || "[{}]")
  );

  const [newItem, setNewItem] = useState("");

  const setAndSaveItems = (newItems: Item[]) => {
    setItems(newItems);
    localStorage.setItem("shoppingList", JSON.stringify(newItems));
  };

  const addItem = (item: any) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    console.log(listItems);
    setAndSaveItems(listItems);
    console.log(items);
  };

  const handleCheck = (id: number) => {
    const listItems = items.map((item: { id: number; checked: any }) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id: number) => {
    console.log(id);
    const listItems = items.filter((item: { id: number }) => {
      return item.id !== id;
    });
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submitted ", e.target.value);
    addItem(newItem);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-slate-700">
      <Header title="To Do Today" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
