import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListAtom } from '../recoil/atom/todoAtom';
import { uuid } from 'uuidv4';

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const [, setTodoList] = useRecoilState(todoListAtom);

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodoItem = () => {
    if (inputValue) {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: uuid(),
          text: inputValue,
          isComplete: false,
        },
      ]);
      setInputValue('');
    }
  };

  return (
    <>
      <input type='text' value={inputValue} onChange={onChange} />
      <button onClick={addTodoItem}>Add Task</button>
    </>
  );
};
