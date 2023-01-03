import { createContext, useState } from "react";

export const ModalContext = createContext(null);

export const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  let [modalContent, setModalContent] = useState(null);
  let [idPage, setIdPage] = useState(null);

  const value = {
    setShowModal,
    showModal,
    modalContent,
    setModalContent,
    idPage,
    setIdPage,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
