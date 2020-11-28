import React from "react";
import { useForm } from "react-hook-form";

const DocumentationThree = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      frstName :{" "}
      <input
        type="text"
        name="firstName"
        ref={register({
          required: "field is required",
          maxLength: { value: 20, message: "to long" },
        })}
      />{" "}
      <br />
      {errors.firstName && <p> {errors.firstName.message} </p>}
      <br />
      lastName :{" "}
      <input
        type="text"
        name="lastName"
        ref={register({ required: true })}
      />{" "}
      <br />
      <br />
      Age :{" "}
      <input
        type="number"
        name="age"
        ref={register({
          required: "required",
          min: 18,
          max: { value: 99, message: "age should be under 100" },
        })}
      />{" "}
      {errors.age && <p> {errors.age.message} </p>}
      <br /> <br />
      <input
        type="password"
        name="password"
        ref={register({
          required: "field is empty",
          validate: (value) => {
            return (
              [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                pattern.test(value)
              ) || "pass must contain upper lower and special chars"
            );
          },
        })}
      />
      {errors.password && <p> {errors.password.message} </p>}
      <input type="submit" value="submit" />
    </form>
  );
};

export default DocumentationThree;
