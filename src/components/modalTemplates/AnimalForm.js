import React, { useState, useContext } from "react";
import { Context } from "../../App";
import useForm from "../../utils/hooks/useForm";
const AnimalForm = () => {
  const { itemToModify } = useContext(Context);

  const [raceInput, setRaceInput] = useState(itemToModify ? itemToModify.race : "");
  const [raceInputError, setRaceInputError] = useState(false);

  const [nameInput, setNameInput] = useState(itemToModify ? itemToModify.name : "");
  const [nameInputError, setNameInputError] = useState(false);

  const [specieInput, setSpecieInput] = useState(itemToModify ? itemToModify.specie : "");
  const [specieInputError, setSpecieInputError] = useState(false);

  const { handleSubmit, handleChange, checkValidity } = useForm();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (
          checkValidity([
            { value: raceInput, setErrorState: setRaceInputError, errorsConditions: { firstLetterUppercase: true } },
            { value: nameInput, setErrorState: setNameInputError, errorsConditions: { length: { min: 0, max: 8 } } },
            { value: specieInput, setErrorState: setSpecieInputError, errorsConditions: { firstLetterUppercase: true, length: { min: 0, max: 8 } } },
          ])
        ) {
          handleSubmit(e, {
            race: raceInput,
            name: nameInput,
            specie: specieInput,
          });
        } else {
          console.warn("END : Error handleSubmit");
        }
      }}
      className="modal-form"
    >
      <label htmlFor="race">race</label>
      <input defaultValue={raceInput} onChange={(e) => handleChange(e, setRaceInput)} name="race" type="text" />
      {raceInputError && (
        <label className="error-msg" htmlFor="race">
          First letter must be uppercase.
        </label>
      )}

      <label htmlFor="name">name</label>
      <input defaultValue={nameInput} onChange={(e) => handleChange(e, setNameInput)} name="name" type="text" />
      {nameInputError && (
        <label className="error-msg" htmlFor="name">
          Lenght should be &#12296; 8 chars.
        </label>
      )}

      <label htmlFor="specie">specie</label>
      <input defaultValue={specieInput} onChange={(e) => handleChange(e, setSpecieInput)} name="specie" type="text" />
      {specieInputError && (
        <label className="error-msg" htmlFor="specie">
          First letter must be uppercase &amp; length &#12296; 8.
        </label>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};
export default AnimalForm;
