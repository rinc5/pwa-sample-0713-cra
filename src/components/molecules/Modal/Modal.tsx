import { ModalPresenter } from "./ModalPresenter";

interface ModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, title, content, children }: ModalProps) => {
  return (
    <ModalPresenter
      isOpen={isOpen}
      title={title}
      content={content}
      children={children}
    />
  );
};
