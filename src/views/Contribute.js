import React from "react";
import { useForm } from "react-hook-form";

function Contribute() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
   const alertMessage1 = "Thanks for expressing an interest ";
  const alertMessage2 = ". We will be in touch via email to ";
  const onSubmit = data =>  alert(`${ alertMessage1} ${ data.name } ${ alertMessage2 } ${data.email}`);
  console.log(watch["name", "email", "comment"]); 


  return (
    <>
      <p>Contribute</p>
      <div class="support-container">
        <div class="form-container">
          <p>A form here for suggesting contributions to the website</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <p>Firstname</p>
            <input defaultValue="Firstname" {...register("name")} />
            <p>Email Address (required)</p>
            <input
              defaultValue="your@email.com"
              {...register("email", { required: true })}
            />
            {errors.emailRequired && <span>Please senter email address.</span>}
            <p>What would you like to contribute?</p>
            <textarea
              defaultValue="Tell us your suggestions"
              {...register("comment")}
            />

            <input type="submit" />
          </form>
        </div>
        <div className="explanation-container">Text goes here</div>
      </div>
    </>

  );
}

export default Contribute;
