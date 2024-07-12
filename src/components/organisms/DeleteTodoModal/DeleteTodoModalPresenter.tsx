import { Modal } from "../../molecules/Modal/Modal";
import { TodoItem } from "../TodoList/TodoListPresenter";

interface DeleteTodoModalPresenterProps {
  isOpen: boolean;
  index: number;
  onClick: (id: number) => void;
  onClickClose: () => void;
  targetTodo: () => TodoItem | undefined;
}

export const DeleteTodoModalPresenter = ({
  isOpen,
  index,
  onClick,
  onClickClose,
  targetTodo,
}: DeleteTodoModalPresenterProps) => {
  return (
    <Modal
      isOpen={isOpen}
      title="Todoを削除しますか？"
      content="削除後、復元はできません"
    >
      <>
        <div className="mx-auto">
          <p>削除対象：</p>
          <p>{targetTodo()?.title}</p>
        </div>

        <div className="flex justify-center gap-2">
          <button
            onClick={onClickClose}
            className="border border-black rounded-md px-4 py-1"
          >
            キャンセル
          </button>
          <button
            className="border border-red-500 bg-red-500 rounded-md text-white px-4 py-1"
            onClick={() => onClick(index)}
          >
            削除する
          </button>
        </div>
      </>
    </Modal>
  );
};
