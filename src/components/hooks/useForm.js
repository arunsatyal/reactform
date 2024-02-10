import { useState } from "react";

const useForm = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Consider returning an object for better extendibility and readability
  return { inputValue, handleOnChange };
};

export default useForm;
