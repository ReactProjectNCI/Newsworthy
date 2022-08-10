import React from 'react'
import { useForm } from 'react-hook-form'
import "../structure.css";

function Contribute() {
     
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const alertMessage1 = "Thanks for expressing an interest ";
  const alertMessage2 = ". We will be in touch via email to ";
  const onSubmit = data =>  alert(`${ alertMessage1} ${ data.name } ${ alertMessage2 } ${data.email}`);
  console.log(watch["name", "email", "comment"]); 
  
  return (
    <div className="WN-container">
      <div className='main-news'>
      <h2>Contribute</h2>
      <p>A form here for suggesting contributions to the website</p>

      <form onSubmit={handleSubmit(onSubmit)}>
      <p>Firstname</p>
      <input defaultValue="Firstname" {...register("name")} />
      <p>Email Address (required)</p>
      <input defaultValue="your@email.com"{...register("email", { required: true })} />
    {errors.emailRequired && <span style="color: red">Please senter email address.</span>}
      <p>What would you lke to contribute?</p>
    <textarea defaultValue="Tell us your suggestions" {...register("comment")} />

      <p><input type="submit" /></p>
    </form>
    </div>
    </div>
  );
}

export default Contribute;
