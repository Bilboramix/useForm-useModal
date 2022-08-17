import React, { useState, useContext } from "react";
import { Context } from "../../App";
import useForm from "../../utils/hooks/useForm";
const JobForm = () => {
  const { itemToModify } = useContext(Context);
  const [nameInput, setNameInput] = useState(itemToModify ? itemToModify.name : "");
  const [structureInput, setStructureInput] = useState(itemToModify ? itemToModify.structure : "");

  const [actualJobInput, setActualJobInput] = useState(itemToModify ? itemToModify.actualJob : false);

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

      <label htmlFor="name">job name</label>
      <input defaultValue={nameInput} onChange={(e) => handleChange(e, setNameInput)} name="name" type="text" />

      <label htmlFor="actualJob">actualJob</label>
      <input defaultChecked={actualJobInput} onClick={(e) => handleChange(e, setActualJobInput, actualJobInput)} name="actualJob" type="checkbox" />
      <button type="submit">Submit</button>
    </form>
  );
};
export default JobForm;
