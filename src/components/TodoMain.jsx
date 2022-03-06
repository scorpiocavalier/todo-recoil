import { useRecoilValue } from 'recoil';
import { todoListAtom } from '../recoil/atom/todoAtom';
import { TodoItemCreator } from './TodoItemCreator';

export const TodoMain = () => {
  const todoList = useRecoilValue(todoListAtom);

  return (
    <div className='parent-container'>
      <div>
        <TodoItemCreator />
      </div>
    </div>
  );
};
