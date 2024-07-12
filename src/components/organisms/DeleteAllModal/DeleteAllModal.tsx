import { DeleteAllModalPresenter } from "./DeleteAllModalPresenter";

interface DeleteAllModalProps {
  isOpen: boolean;
  onClick: () => void;
  onClickClose: () => void;
}

export const DeleteAllModal = ({
  isOpen,
  onClick,
  onClickClose,
}: DeleteAllModalProps) => {
  return (
    <DeleteAllModalPresenter
      isOpen={isOpen}
      onClick={onClick}
      onClickClose={onClickClose}
    />
  );
};
