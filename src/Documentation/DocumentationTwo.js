import React from "react";
import { useForm } from "react-hook-form";

const DocumentationTwo = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input type="text" name="name" ref={register({ required: true })} />
      {errors.name && <p> name field is empty </p>}

      <select ref={register({ required: true })} name="gender">
        <option value=""> --select-- </option>
        <option value="male"> male </option>
        <option value="female"> female </option>
      </select>
      {errors.gender && <p> must select any of these option</p>}

      <button type="submit"> submit</button>
    </form>
  );
};

export default DocumentationTwo;
