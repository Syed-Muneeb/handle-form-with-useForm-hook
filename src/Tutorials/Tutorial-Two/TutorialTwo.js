import { useForm } from "react-hook-form";

const TutorialTwo = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstname"> first Name :</label> {"   "}
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="enter your name"
          ref={register({
            required: "required",
            minLength: { value: 8, message: "must be atleast 8 " },
          })}
        />{" "}
        {errors.firstname && <p> {errors.firstname.message} </p>}
        <br /> <br />
        <label htmlFor="lastname">last Name : </label> {"   "}
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="enter you last name"
          ref={register({ required: true })}
        />{" "}
        {errors.lastname && <p> required </p>}
        <br /> <br />
        <label htmlFor="gender"> gender : </label>
        <select name="gender" id="gender" ref={register({ required: true })}>
          <option value=""> --select--</option>
          <option value="male"> male </option>
          <option value="female"> female </option>
        </select>{" "}
        {errors.gender && <p> required</p>}
        <br /> <br />
        <label htmlFor="username"> UserName : </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="enter your userName "
          ref={register({ required: true })}
        />{" "}
        {errors.username && <p> required </p>}
        <br /> <br />
        <label htmlFor="email"> Email : </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="enter your email"
          ref={register({ required: true })}
        />{" "}
        {errors.email && <p> required</p>}
        <br /> <br />
        <label htmlFor="aboutyou"> About you : </label>
        <textarea
          style={{ height: "20px" }}
          name="about"
          id="about you"
          ref={register({ required: true })}
        ></textarea>{" "}
        <br /> <br />
        {errors.about && <p> required</p>}
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default TutorialTwo;
