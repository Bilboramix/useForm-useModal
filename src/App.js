import "./App.css";
import Modal from "./components/Modal";
import useModal from "./utils/hooks/useModal";
import { useState, createContext } from "react";
import testData from "./placeholders/testData";
export const Context = createContext();
function App() {
  const { isVisible, toggleModal } = useModal();
  const [templateName, setTemplateName] = useState();
  const [itemToModify, setItemToModify] = useState(null);

  return (
    <Context.Provider value={{ testData, itemToModify }}>
      <div className="container">
        <button
          onClick={() => {
            toggleModal();
            setTemplateName("JobForm");
            setItemToModify(null);
          }}
        >
          créer un job
        </button>
        {testData.jobs.map((job) => (
          <div className="item" key={job._id}>
            <h4>Structure : {job.structure}</h4>
            <h4>Nom : {job.name}</h4>
            <h4>Job actuel ? {job.actualJob ? "oui" : "non"}</h4>
            <button
              onClick={() => {
                toggleModal();
                setTemplateName("JobForm");
                setItemToModify(job);
              }}
            >
              modifier
            </button>
          </div>
        ))}
      </div>
      <div className="container">
        <button
          onClick={() => {
            toggleModal();
            setTemplateName("AnimalForm");
            setItemToModify(null);
          }}
        >
          ajouter un animal
        </button>
        {testData.animals.map((animal) => (
          <div className="item" key={animal._id}>
            <h4>Race : {animal.race}</h4>
            <h4>Name : {animal.name}</h4>
            <h4>Specie : {animal.specie}</h4>
            <button
              onClick={() => {
                toggleModal();
                setTemplateName("AnimalForm");
                setItemToModify(animal);
              }}
            >
              modifier
            </button>
          </div>
        ))}
      </div>
      <Modal isVisible={isVisible} toggle={toggleModal} templateName={templateName} />
    </Context.Provider>
  );
}

export default App;
