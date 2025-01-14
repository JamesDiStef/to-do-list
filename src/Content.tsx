import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: "Leetcode practice" },
    { id: 2, checked: true, item: "Lunch" },
    { id: 3, checked: true, item: "Walk" },
    { id: 4, checked: true, item: "React practice" },
    { id: 5, checked: true, item: "Dinner" },
  ]);

  const handleCheck = (id: number) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  const handleDelete = (id: number) => {
    console.log(id);
    const listItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(listItems);
    console.log(items);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  return (
    <main>
      {items.length ? (
        <ul className="list-none p-0 m-0  text-2xl">
          {items.map((item) => (
            <li
              className="flex items-center justify-between mb-2 pr-12"
              key={item.id}
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheck(item.id)}
                  className="mr-2 cursor-pointer"
                />
                <label
                  onDoubleClick={() => handleCheck(item.id)}
                  className={`cursor-pointer ${
                    item.checked ? "line-through" : ""
                  }`}
                >
                  {item.item}
                </label>
              </div>
              <div className="pl-5">
                <FaTrashAlt
                  onClick={() => handleDelete(item.id)}
                  role="button"
                  tabIndex={0}
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Empty</p>
      )}
    </main>
  );
};

export default Content;
