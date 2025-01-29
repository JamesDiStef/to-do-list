import { ReactNode, useEffect, useState } from "react";
import AddItem from "./AddItem";
import apiRequest from "./ApiRequest";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { Item } from "./LineItem";
import SearchItem from "./SearchItem";

const TodoPage = () => {
  const API_URL = "http://localhost:3500/items";
  // 'https://us-central1-xenon-heading-433720-j4.cloudfunctions.net/api/animals';

  const [items, setItems] = useState<Item[]>([]);

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState<
    ReactNode | Error | unknown | null
  >(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not recieve expected data");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

  const addItem = async (item: any) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };

    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleCheck = async (id: number) => {
    const listItems = items.map(
      (item: { id: number; checked: any; item: string }) =>
        item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);

    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const url = `${API_URL}/${id}`;
    const result = await apiRequest(url, updateOptions);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id: number) => {
    const listItems = items.filter((item: { id: number }) => {
      return item.id !== id;
    });
    setItems(listItems);

    const deleteOptions = {
      method: "DELETE",
      // headers: {
      //   "Content-Type": "application/json",
      // },
    };
    const url = `${API_URL}/${id}`;
    const result = await apiRequest(url, deleteOptions);
    if (result) setFetchError(result);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submitted ", e.target.value);
    addItem(newItem);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-slate-700">
      <Header title="To Do Today" />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading Items...</p>}
        {/* {fetchError && <p>{`${fetchError}`}</p>} */}
        {!fetchError && !isLoading && (
          <Content
            items={items.filter((item: Item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            // items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
};

export default TodoPage;
