import { LOCAL_STORAGE_NAME } from "../../../CONST";
import { TodoItem } from "../TodoList/TodoListPresenter";
import { DeleteTodoModalPresenter } from "./DeleteTodoModalPresenter";

interface DeleteTodoModalProps {
  isOpen: boolean;
  index: number;
  onClick: (id: number) => void;
  onClickClose: () => void;
}

export const DeleteTodoModal = ({
  isOpen,
  index,
  onClick,
  onClickClose,
}: DeleteTodoModalProps) => {
  const todos = localStorage.getItem(LOCAL_STORAGE_NAME);
  const parsedTodos: TodoItem[] = todos != null ? JSON.parse(todos) : [];

  /**
   * 削除対象のTodo取得
   */
  const targetTodo = (): TodoItem | undefined => {
    const item: TodoItem | undefined = parsedTodos.find((_todo, i) => {
      return i === index;
    });

    return item;
  };

  return (
    <DeleteTodoModalPresenter
      isOpen={isOpen}
      index={index}
      onClick={onClick}
      onClickClose={onClickClose}
      targetTodo={targetTodo}
    />
  );
};
