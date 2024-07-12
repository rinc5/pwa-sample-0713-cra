import { FaTrashCan } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";
import { DeleteTodoModal } from "../DeleteTodoModal/DeleteTodoModal";
import { DeleteAllModal } from "../DeleteAllModal/DeleteAllModal";

export type TodoItem = {
  title: string;
};

interface TodoListPresenterProps {
  todoList: TodoItem[];
  deleteItem: (id: number) => void;
  isOpen: boolean;
  openModal: (index: number) => void;
  todoIndex: number;
  closeModal: () => void;
  deleteAll: () => void;
  isAllModalOpen: boolean;
  handleAllModal: () => void;
}

export function TodoListPresenter({
  todoList,
  deleteItem,
  isOpen,
  openModal,
  todoIndex,
  closeModal,
  deleteAll,
  isAllModalOpen,
  handleAllModal,
}: TodoListPresenterProps) {
  return (
    <div className="w-full md:w-1/2 mx-auto">
      <div className="flex justify-between">
        <h2 className="font-bold text-xl">Todo一覧</h2>
        {todoList.length >= 1 && (
          <button
            onClick={handleAllModal}
            className="border border-red-500 rounded-md bg-red-500 text-white px-4 py-1"
          >
            一括削除
          </button>
        )}
      </div>
      {todoList.length >= 1 ? (
        <ul className="list-disc list-inside mt-4">
          {todoList.map((todo, index) => (
            <div
              key={index}
              className="flex gap-2 justify-between items-center mb-4"
            >
              <li className="truncate">{todo.title}</li>
              <button
                onClick={() => openModal(index)}
                className="border border-red-500 rounded-md bg-red-500 text-white px-4 py-1"
              >
                <FaTrashCan />
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="flex gap-2 items-center mt-4">
          <IoIosWarning className="text-yellow-500 text-2xl" />
          登録されているTodoがありません
        </div>
      )}

      <DeleteTodoModal
        isOpen={isOpen}
        index={todoIndex}
        onClick={deleteItem}
        onClickClose={closeModal}
      />

      <DeleteAllModal
        isOpen={isAllModalOpen}
        onClickClose={handleAllModal}
        onClick={deleteAll}
      />
    </div>
  );
}
