import React from "react";
import { Suspense, lazy } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isVisible, toggle, templateName }) => {
  const Template = lazy(() => import(`./modalTemplates/${templateName}`));

  return (
    isVisible &&
    createPortal(
      <aside id="modal-overlay" onClick={(e) => e.target.id === "modal-overlay" && toggle()}>
        <Suspense fallback={<p>Chargement...</p>}>
          <Template />
        </Suspense>
      </aside>,
      document.body
    )
  );
};

export default Modal;
