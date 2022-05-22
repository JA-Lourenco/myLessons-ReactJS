import Modal from 'react-modal'

import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./Routes/Routes";

import { GlobalStyle } from "./global/styles/global";

Modal.setAppElement('#root');

export function App() {
  
  return (
      <BrowserRouter>
        <RoutesApp />

        <GlobalStyle />
      </BrowserRouter>
  );
}