import { useState } from "react";
import ReturnButton from "./ReturnButton";

export default function TodoList () {
    const [items, setItems] = useState([]);
    const [editingItemIndex, setEditingItemIndex] = useState(-1); // inizialmente non stiamo modificando nessun elemento
  
    const addList = (event) => {
      event.preventDefault();
      const inputText = event.target.elements.todo.value;
      setItems([...items, inputText]);
      event.target.reset();
    }
  
    const removeAll = () => {
      setItems([])
    }
  
    const removeItem = (index) => {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
    }
  
    const editItem = (index) => {
      setEditingItemIndex(index);
    }
  
    const saveEdit = (event, index) => {
      event.preventDefault();
      const newText = event.target.elements.editText.value;
      const newItems = [...items];
      newItems[index] = newText;
      setItems(newItems);
      setEditingItemIndex(-1); // quando abbiamo finito la modifica, resettiamo lo stato di editing
    }
  
    return (
      <div className="bg-neutral-800 w-full h-screen overflow-hidden flex flex-col justify-center items-center">
        <h1 style={{ color: '#bd00ff' }} className="text-5xl asher-punk font-extrabold uppercase text-white">Todo List</h1>
        <ul className="m-12 flex flex-col gap-4 justify-center">
          {items.map((item, index) => {
            if (index === editingItemIndex) {
              return (
                <li key={index} className="py-2 px-6 bg-white rounded-lg flex gap-4 justify-between items-center">
                  <form onSubmit={(event) => saveEdit(event, index)} className="flex gap-4">
                    <input type="text" name="editText" defaultValue={item} className="rounded-lg border-2 border-black" />
                    <button type="submit" className="border p-2 text-black rounded-lg">Save</button>
                  </form>
                </li>
              );
            } else {
              return (
                <li key={index} className='py-2 px-6 bg-white rounded-lg flex gap-4 justify-between items-center'>
                    <p className="text-lg font-light">{item}</p>
                    <div className="flex gap-6 flex-row-reverse">
                        <button className="border-2 p-1 px-3 border-red-500 rounded-full hover:bg-red-500 text-lg font-semibold"
                          onClick={() => removeItem(index)}>X</button>
                        <button className="border-2 p-1 px-3 border-blue-500 rounded-full hover:bg-blue-500 text-lg font-semibold"
                          onClick={() => editItem(index)}>Edit</button>
                    </div>
                </li>
                );
            }
        })}
        </ul>
            <form onSubmit={addList} className="p-12 flex gap-6">
                <input type="text" name="todo" className="rounded-lg" />
                <button type="submit" className="border border-white p-2 text-white rounded-lg">Add</button>
            </form>
            <button className="p-1 px-3 rounded-full bg-red-500 text-lg font-semibold"
               onClick={removeAll}>Remove All</button>
            <ReturnButton />
    </div>
    );
}