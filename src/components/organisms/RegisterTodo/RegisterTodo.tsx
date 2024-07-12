import { useForm } from "react-hook-form";
import { RegisterTodoPresenter } from "./RegisterTodoPresenter";
import { LOCAL_STORAGE_NAME } from "../../../CONST";
import { TodoItem } from "../TodoList/TodoListPresenter";
import { Dispatch, SetStateAction } from "react";
import {
  RegisterTodoInputType,
  RegisterTodoSchema,
} from "./RegisterTodo.schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface RegisterTodoProps {
  setTodoList: Dispatch<SetStateAction<TodoItem[]>>;
}

export function RegisterTodo({ setTodoList }: RegisterTodoProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, errors },
  } = useForm<RegisterTodoInputType>({
    defaultValues: {
      title: "",
    },
    resolver: zodResolver(RegisterTodoSchema),
  });

  const onClickSubmit = (data: RegisterTodoInputType): void => {
    const todos = localStorage.getItem(LOCAL_STORAGE_NAME);
    const parsedTodos = todos != null ? JSON.parse(todos) : [];
    let todoData: TodoItem[] = [...parsedTodos, data];

    // LocalStorageへのデータ追加
    const stringifyData: string = JSON.stringify(todoData);
    localStorage.setItem(LOCAL_STORAGE_NAME, stringifyData);

    // フォーム入力クリア
    reset();

    setTodoList(todoData);
  };

  return (
    <RegisterTodoPresenter
      register={register}
      handleSubmit={handleSubmit}
      onClick={onClickSubmit}
      isDirty={isDirty}
      errors={errors}
    />
  );
}
