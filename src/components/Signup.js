import React from 'react';
import { useForm } from 'react-hook-form';

// uses react hook form to take input and 
function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (e) => {
    e.preventDefault();
    console.loge(e)
  }
  
  //data => console.log(data);
  //console.log(errors);
  
// data is formatted in this way because it could be extended to build a mailing list in Mailchimp for exampls
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80, pattern: /^[a-z ,.'-]+$/i/i})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100, pattern: /^[a-z ,.'-]+$/i/i})} />
      <input type="checkbox" placeholder="Do you wish to receive regular news updates?" {...register("Do you wish to receive regular news updates?", {})} />
      <input type="submit" />
    </form>
  );
}

export default Signup;