import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListAtom } from '../recoil/atom/todoAtom';
import { TodoItem } from './TodoItem';
import { TodoItemCreator } from './TodoItemCreator';

export const TodoMain = () => {
  const todoList = useRecoilValue(todoListAtom);

  return (
    <>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
