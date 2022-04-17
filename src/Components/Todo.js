import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { TodoModal } from "./TodoModal";

export const Todo = () => {
  const [showTodoModal, setShowTodoModal] = useState(false);
  const todoModalRef = useRef();

  const closeModal = () => setShowTodoModal(false);
  return (
    <div ref={todoModalRef}>
      <button className="text-2xl" onClick={() => setShowTodoModal(true)}>
        To do
      </button>
      <AnimatePresence>
        {showTodoModal && <TodoModal closeModal={closeModal} />}
      </AnimatePresence>
    </div>
  );
};
