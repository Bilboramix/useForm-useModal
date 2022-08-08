const useForm = () => {
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
  return { handleSubmit, handleChange };
};

export default useForm;
