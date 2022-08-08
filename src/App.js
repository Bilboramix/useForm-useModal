import "./App.css";
import Modal from "./components/Modal";
import useModal from "./utils/hooks/useModal";
import { useState } from "react";
function App() {
  const { isVisible, toggleModal } = useModal();
  const [templateName, setTemplateName] = useState();
  return (
    <div>
      <button
        onClick={() => {
          toggleModal();
          setTemplateName("SculptureForm");
        }}
      >
        Sculpture
      </button>
      <button
        onClick={() => {
          toggleModal();
          setTemplateName("AnimalForm");
        }}
      >
        Animal
      </button>
      <button
        onClick={() => {
          toggleModal();
          setTemplateName("JobForm");
        }}
      >
        Job
      </button>
      <Modal isVisible={isVisible} toggle={toggleModal} templateName={templateName} />
    </div>
  );
}

export default App;
