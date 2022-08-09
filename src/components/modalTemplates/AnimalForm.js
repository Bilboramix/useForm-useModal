import { useState, useContext } from "react";
import { Context } from "../../App";
import useForm from "../../utils/hooks/useForm";
const AnimalForm = () => {
  const { itemToModify } = useContext(Context);
  const [raceInput, setRaceInput] = useState(itemToModify ? itemToModify.race : "");

  const [nameInput, setNameInput] = useState(itemToModify ? itemToModify.name : "");

  const [specieInput, setSpecieInput] = useState(itemToModify ? itemToModify.specie : "");
  const { handleSubmit, handleChange } = useForm();

  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, {
          race: raceInput,
          name: nameInput,
          specie: specieInput,
        })
      }
      className="modal-form"
    >
      <label htmlFor="race">race</label>
      <input defaultValue={raceInput} onChange={(e) => handleChange(e, setRaceInput)} name="race" type="text" />

      <label htmlFor="name">name</label>
      <input defaultValue={nameInput} onChange={(e) => handleChange(e, setNameInput)} name="name" type="text" />

      <label htmlFor="specie">specie</label>
      <input defaultValue={specieInput} onClick={(e) => handleChange(e, setSpecieInput)} name="specie" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};
export default AnimalForm;
