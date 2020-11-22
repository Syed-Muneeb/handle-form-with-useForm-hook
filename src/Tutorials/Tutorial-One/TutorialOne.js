import { useForm } from "react-hook-form";

const TutorialOne = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          ref={register({ required: "Email is required" })}
        />
        {errors.email && <p> email is required </p>}

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          ref={register({
            required: "passwrod is required",
            minLength: { value: 8, message: "must be atleast 8" },
          })}
        />
        {errors.password && <p> {errors.password.message} </p>}
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default TutorialOne;
