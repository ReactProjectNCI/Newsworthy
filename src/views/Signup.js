import React from "react";
import { useForm } from "react-hook-form";
import "../structure.css";

// uses react hook form to take input and validate
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    e.preventDefault();
    console.loge(e);
  };

  //data => console.log(data);
  //console.log(errors);

  // data is formatted in this way because it could be extended to build a mailing list in Mailchimp for exampls
  return (
    <>
      <div className="header-sub">
        <h1 className="brand-header">Subscribe</h1>
        <h3 className="subtitle-header">Read All About It</h3>
      </div>
      <div class="support-container">
        <div class="form-container">
          <h2> Do you want to receive news updates regularly?</h2>
          <h3>Register your interest using the form below</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="form-sub">
            <div className="input-container">
              <h1 className="pitch">Subscribe</h1>
              Name
              <input {...register("name")} placeholder="Your name" />
              Email
              <input
                {...register("email", { required: true })}
                placeholder="Your email"
              />
              {errors.emailRequired && <span>Please enter email address.</span>}
              <input
                type="checkbox"
                placeholder="Do you wish to receive regular news updates?"
                {...register(
                  "Do you wish to receive regular news updates?",
                  {}
                )}
              />
              <input className="submit" type="submit" />
            </div>
          </form>
        </div>
        <div className="explanation-container">Text Here</div>
      </div>
    </>
  );
}

export default Signup;
