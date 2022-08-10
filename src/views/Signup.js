import React from 'react';
import { useForm } from 'react-hook-form';
import "../structure.css";

// uses react hook form to take input and validate
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
    <div className="WN-container">
    <div className="main-news">
      <h2> Do you want to receive news updates regularly?</h2>
      <h3>Register your interest using the form below</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
      <p> Please enter your email address</p>
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <p>Firstname</p>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80, pattern: /^[a-z ,.'-]+$/i})} />
      <p>Lastname</p>
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100, pattern: /^[a-z ,.'-]+$/i})} />
      <input type="checkbox" placeholder="Do you wish to receive regular news updates?" {...register("Do you wish to receive regular news updates?", {})} />
      <input type="submit" />
    </form>
    </div>
    </div>
  );
}

export default Signup;