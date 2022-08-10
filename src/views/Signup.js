import React from "react";
import { useForm } from "react-hook-form";
import "../contribSub.css";
import IdeaImg from "../images/idea.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

// uses react hook form to take input and validate
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const alertMessage1 = "Thank you! We will add your email address to our list.";
  const onSubmit = (data) => {
    alert(`${alertMessage1}`);
    console.log(data);
    reset('', {keepValues: false,})
  };

  //data => console.log(data);
  //console.log(errors);

   // react hook form below with validation and span including error message
  // data is formatted in this way because it could be extended to build a mailing list in Mailchimp for exampls
  return (
    <>
      <div className="header-sub">
        <h1 className="brand-header">Subscribe</h1>
        <h3 className="subtitle-header">Read All About It</h3>
      </div>
      <div class="support-container">
        <div class="form-container">
          <h1 className="pitch-tag1"> Join our Mailing List</h1>
          <p>
            Get the latest and greatest straight to your inbox and always stay
            one step ahead of the game
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="form-sub">
            <div className="input-container">
              <FontAwesomeIcon
                icon={faMailBulk}
                className="location-icon"
              ></FontAwesomeIcon>
              Name
              <input name="name" {...register("name", {
                  maxLength: 80,
                  pattern: /^[a-z ,.'-]+$/i,
                })} placeholder="Your name" /> 
                {errors?.name && <span>Please enter your given name with letters.</span>}
              Email
              <input name="email" 
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                placeholder="Your email"
              />
              {errors?.email && <span>Please enter valid email address.</span>}
              
              <input className="submit" type="submit" />
            </div>
          </form>
        </div>
        <div className="explanation-container">
          <h1 className="pitch-tag2">NewsWorthy</h1>
          <p>
            Bringing it all straight to you and as it happens: that's
            NewsWorthy. We take everything there is to know that's happening
            globally and locally, and give it to you full and fast. You'll stay
            one step ahead of the game and know how to react to the big and the
            small moves in the world.
          </p>
          <img className="idea-image" src={IdeaImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Signup;
