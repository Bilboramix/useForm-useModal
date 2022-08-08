import { useState } from "react";
import useForm from "../../utils/hooks/useForm";
const JobForm = () => {
  const [structureInput, setStructureInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [actualJobInput, setActualJobInput] = useState(false);

  const { handleSubmit, handleChange } = useForm();

  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, {
          structure: structureInput,
          name: nameInput,
          actualJob: actualJobInput,
        })
      }
      className="modal-form"
    >
      <label htmlFor="structure">structure</label>
      <input defaultValue={structureInput} onChange={(e) => handleChange(e, setStructureInput)} name="structure" type="text" />

      <label htmlFor="name">Nom de la sculpture</label>
      <input defaultValue={nameInput} onChange={(e) => handleChange(e, setNameInput)} name="name" type="text" />

      <label htmlFor="actualJob">actualJob</label>
      <input defaultValue={actualJobInput} onClick={(e) => handleChange(e, setActualJobInput, actualJobInput)} name="actualJob" type="checkbox" />
      <button type="submit">Submit</button>
    </form>
  );
};
export default JobForm;
