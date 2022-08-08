import React from 'react'
import { useForm } from 'react-hook-form'

function Contribute() {
     
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch["name", "email", "comment"]); 
  
  return (
    <>
      <p>Contribute</p>
      <p>A form here for suggesting contributions to the website</p>

      <form onSubmit={handleSubmit(onSubmit)}>
      <p>Firstname</p>
      <input defaultValue="Firstname" {...register("name")} />
      <p>Email Address (required)</p>
      <input defaultValue="your@email.com"{...register("email", { required: true })} />
    {errors.emailRequired && <span>Please senter email address.</span>}
      <p>What would you lke to contribute?</p>
    <input defaultValue="Tell us your suggestions" {...register("comment")} />

      <input type="submit" />
    </form>
    </>
  );
}

export default Contribute;
