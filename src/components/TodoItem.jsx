import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListAtom } from '../recoil/atom/todoAtom';

export const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const index = todoList.findIndex((listItem) => listItem === item);

  const replaceItemAtIndex = (list, index, newValue) => {
    return [...list.slice(0, index), newValue, ...list.slice(index + 1)];
  };

  const removeItemAtIndex = (list, index) => {
    return [...list.slice(0, index), ...list.slice(index + 1)];
  };

  const editItemText = (event) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: event.target.value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type='text' value={item.text} onChange={editItemText} />
      <input
        type='checkbox'
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};
