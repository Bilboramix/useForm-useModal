import { useState, useContext } from "react";
import { Context } from "../../App";
import useForm from "../../utils/hooks/useForm";
const JobForm = () => {
  const { itemToModify } = useContext(Context);
  const [authorInput, setAuthorInput] = useState(itemToModify ? itemToModify.author : "");

  const [nameInput, setNameInput] = useState(itemToModify ? itemToModify.name : "");
  const [materialInput, setMaterialInput] = useState(itemToModify ? itemToModify.material : "");

  const [isAvailableInput, setIsAvailableInput] = useState(itemToModify ? itemToModify.isAvailable : false);

  const { handleSubmit, handleChange } = useForm();
  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, {
          author: authorInput,
          name: nameInput,
          actualJob: isAvailableInput,
        })
      }
      className="modal-form"
    >
      <label htmlFor="author">Author</label>
      <input defaultValue={authorInput} onChange={(e) => handleChange(e, setAuthorInput)} name="author" type="text" />

      <label htmlFor="name">Sculpture name</label>
      <input defaultValue={nameInput} onChange={(e) => handleChange(e, setNameInput)} name="name" type="text" />

      <label htmlFor="name">Material :</label>
      <input defaultValue={materialInput} onChange={(e) => handleChange(e, setMaterialInput)} name="material" type="text" />

      <label htmlFor="isAvailable">Is Available :</label>
      <input defaultChecked={isAvailableInput} onClick={(e) => handleChange(e, setIsAvailableInput, isAvailableInput)} name="isAvailable" type="checkbox" />
      <button type="submit">Submit</button>
    </form>
  );
};
export default JobForm;
