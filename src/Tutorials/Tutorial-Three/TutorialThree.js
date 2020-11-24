import { useForm } from "react-hook-form";

const TutorialThree = () => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      name: "mark",
      email: "mark@email.com",
      password: "Pass@word1!",
      checkbox: true,
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <label htmlFor="name"> name : </label>
        <input
          type="text"
          name="name"
          id="name"
          ref={register({ required: "required " })}
        />{" "}
        {errors.name ? <div> {errors.name.message} </div> : null}
        <br /> <br/>
        <label htmlFor="email"> email : </label>
        <input
          type="email"
          name="email"
          id="email"
          ref={register({ required: "required " })}
        />{" "}
        {errors.email ? <div> {errors.email.message} </div> : null}
        <br /> <br/>
        <label htmlFor="password"> password : </label>
        <input
          type="password"
          name="password"
          id="password"
          ref={register({
            required: "required",
            minLength: {
              value: 8,
              message: "must be eight chars",
            },
            validate: (value) => {
              return (
                [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                  pattern.test(value)
                ) || " must include lower , upper , number , special chars"
              );
            },
          })}
        />{" "}
        {errors.password ? <div> {errors.password.message} </div> : null}
        <br /> <br/>
        <label htmlFor="selete"> you must agree to our terms : </label>
        <input
          type="checkbox"
          name="checkbox"
          id="select"
          ref={register({ required: "required" })}
        />{" "}
        {errors.checkbox ? <div> {errors.checkbox.message} </div> : null}
        <br /> <br />
        <button type="submit"> register </button>
      </form>
    </>
  );
};

export default TutorialThree;
