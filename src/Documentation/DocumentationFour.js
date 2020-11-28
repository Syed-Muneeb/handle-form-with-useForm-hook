import React from "react";
import { useForm } from "react-hook-form";

const Input = ({ label, register, required }) => (
  <>
    <label> {label}</label>

    <input name={label} type="text" ref={register({ required })} />
  </>
);

const Select = ({ label, register, required }) => (
  <>
    <label> {label} </label>
    <select name={label} ref={register({ required })}>
      <option value=""> --select--</option>
      <option value="20"> 20 </option>
      <option value="30"> 30 </option>
    </select>
  </>
);

const DocumentationFour = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Input label="FirtName" register={register} required /> <br /> <br />
        <Select label="select " register={register} required />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default DocumentationFour;
