import { useState } from "react";

import { DeleteModal } from "./components/DeleteModal";
import Modal from 'react-modal'

import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./Routes/Routes";

import { GlobalStyle } from "./global/styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    function handleIsDeleteModalOpen() {
        setIsDeleteModalOpen(true)
    } 
    function handleIsDeleteModalClose() {
        setIsDeleteModalOpen(false)
    }
    
  return (
      <BrowserRouter>
        <RoutesApp onOpenDeleteModal={handleIsDeleteModalOpen}/>

        <DeleteModal 
          isOpen={isDeleteModalOpen}
          onRequestClose={handleIsDeleteModalClose}
        />

        <GlobalStyle />
      </BrowserRouter>
  );
}