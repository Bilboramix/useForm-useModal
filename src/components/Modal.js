import { useState } from "react";
import { createContext } from "react";
import { Suspense, lazy } from "react";
import { createPortal } from "react-dom";
export const InputContext = createContext();

const Modal = ({ isVisible, toggle, templateName }) => {
  const Template = lazy(() => import(`./modalTemplates/${templateName}`));

  const handleToggle = (e) => {
    e.target.className.indexOf("modal-overlay") === 0 && toggle();
  };

  return (
    isVisible &&
    createPortal(
      <aside onClick={(e) => handleToggle(e)} className="modal-overlay">
        <Suspense fallback={<p>Chargement...</p>}>
          <Template />
        </Suspense>
      </aside>,
      document.body
    )
  );
};

export default Modal;
