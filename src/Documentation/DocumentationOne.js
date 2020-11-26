import React from "react";
import { useForm } from "react-hook-form";

const DocumentationOne = () => {
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      firstName: "syed",
      lastName: "Muneeb",
    },
  });

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input type="text" defaultValue="test" name="firstName" ref={register} />

      <input type="text" name="lastName" ref={register({ required: true })} />
      {errors.lastName && <span> this field is required </span>}
      
      <input type="submit" value="submit" />
    </form>
  );
};

export default DocumentationOne;
