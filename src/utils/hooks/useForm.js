import { checkLength, checkFirstLetterUppercase } from "../lib/useFormMethods";

const useForm = () => {
  const checkValidity = (inputsArr) => {
    let resultError = false;
    for (let i = 0; i < inputsArr.length; i++) {
      const inputDatas = inputsArr[i];
      // Errors conditions are listed into and array in the input object, so we can store multiple conditions
      // I could use forEach but it would change the scope so i use a classic "for" loop :
      for (let j = 0; j < Object.keys(inputDatas.errorsConditions).length; j++) {
        /* We get the name of the error condition to call the required method with a switch statement,
        that will differenciate behaviors for the error

        If its detect error, the switch will turn resultError and input's error state to true */
        const errorName = Object.keys(inputDatas.errorsConditions)[j];
        switch (errorName) {
          case "length":
            if (checkLength(inputDatas.value, inputDatas.errorsConditions.length.min, inputDatas.errorsConditions.length.max)) {
              inputDatas.setErrorState(true);
              resultError = true;
            }
            break;

          case "firstLetterUppercase":
            if (checkFirstLetterUppercase(inputDatas.value)) {
              inputDatas.setErrorState(true);
              resultError = true;
            }
            break;
          default:
            break;
        }
      }
      // If no error has been returned by the switch for this input,
      // we set the error displaying to false and check the next input.
      !resultError && inputDatas.setErrorState(false);
    }
    return !resultError;
  };

  const handleSubmit = (e, values) => {
    e.preventDefault();
    console.log("Submit !", values);
  };
  const handleChange = (e, setState, state) => {
    if (e.target.type === "checkbox") {
      setState(!state);
    } else if (e.target.type === "text") {
      setState(e.target.value);
    }
  };
  return { handleSubmit, handleChange, checkValidity };
};

export default useForm;
