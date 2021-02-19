import { useRecoilValue } from "recoil"
import TodoItemCreator from "../TodoItemCreator"
import TodoItem from "../TodoItem"
import TodoListFilters from "../TodoListFilters"
import TodoListStats from "../TodoListStats"
import {filteredTodoListState} from "../../recoil/todos"

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}