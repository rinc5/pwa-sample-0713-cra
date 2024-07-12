import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { RegisterTodoInputType } from "./RegisterTodo.schema";

interface RegisterTodoPresenterProps {
  register: UseFormRegister<RegisterTodoInputType>;
  handleSubmit: UseFormHandleSubmit<RegisterTodoInputType>;
  onClick: (data: RegisterTodoInputType) => void;
  isDirty: boolean;
  errors: FieldErrors<RegisterTodoInputType>;
}

export function RegisterTodoPresenter({
  register,
  handleSubmit,
  onClick,
  isDirty,
  errors,
}: RegisterTodoPresenterProps) {
  const disabledSubmitButton = (): boolean => {
    if (isDirty) {
      if (Object.keys(errors).length >= 1) {
        return true;
      }

      return false;
    }

    return true;
  };

  return (
    <div className="w-full md:w-1/2 mx-auto">
      <form
        onSubmit={handleSubmit(onClick)}
        className="flex flex-col items-center gap-4"
      >
        <div>
          <div className="flex gap-x-2">
            <label htmlFor="title">Todo</label>
            <input
              id="title"
              {...register("title")}
              className="border border-black rounded-md"
              placeholder="Todoを入力"
            />
          </div>
          {errors.title && (
            <p className="text-red-500">{errors.title?.message}</p>
          )}
        </div>

        <div className="w-full text-center">
          <button
            type="submit"
            disabled={disabledSubmitButton()}
            className="border border-green-600 bg-green-600 text-white rounded-md w-full md:w-1/3 px-4 py-1 disabled:bg-slate-500 disabled:border-slate-500 disabled:text-opacity-30"
          >
            登録
          </button>
        </div>
      </form>
    </div>
  );
}
