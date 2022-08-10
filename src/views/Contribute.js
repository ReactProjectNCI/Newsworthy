import React from "react";
import { useForm } from "react-hook-form";

import "../contribSub.css";

function Contribute() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const alertMessage1 = "Thanks for expressing an interest ";
  const alertMessage2 = ". We will be in touch via email to ";
  const onSubmit = (data) =>
    alert(`${alertMessage1} ${data.name} ${alertMessage2} ${data.email}`);
  console.log(watch[("name", "email", "comment")]);

  return (
    <>
      <div className="header">
        <h1 className="brand-header">Contribute</h1>
        <h3 className="subtitle-header">Tell It How It Is</h3>
      </div>
      <div class="support-container">
        <div class="form-container">
          <h1 className="pitch-tag1">Let them Read All About It!</h1>
          <p>
            Get your voice heard by pitching us your best idea. We're always
            interested in new pieces and we have millions of daily users. Never
            have idea been thrown further and never was news more relevant.
          </p>
          <p>Get it in the press and let the people react!</p>

          <form onSubmit={handleSubmit(onSubmit)} id="contribForm">
            <div className="input-container">
              <h1 className="pitch">Pitch It</h1>
              Name
              <input {...register("name")} placeholder="Your name" />
              Email
              <input
                {...register("email", { required: true })}
                placeholder="Your email"
              />
              {errors.emailRequired && <span>Please enter email address.</span>}
              Your idea
              <textarea
                id="contribForm"
                name="pitch"
                {...register("comment")}
                placeholder="Pitch your idea here..."
              />
              <input type="submit" className="submit" />
            </div>
          </form>
        </div>
        <div className="explanation-container">
          <h1 className="pitch-tag2">Why Write for NewsWorthy?</h1>
          <p>
            We <em>react</em> to the news as it happens. Through hundreds of
            people like <em>you</em>, we build a community of global knowledge
            within one framework that is dynamic, open to change, and
            responsive.
          </p>
          <p>
            <strong>You can be a component in this.</strong> Feed into the
            constant stream of evolving news that is NewsWorthy, and help us
            deliver relevant content to interested people.
          </p>
          <p>
            Our highly skilled editors will review any idea you have and get
            back to you:
          </p>
          <ul>
            <li>Kieran Fitzgibbon</li>
            <li>Victor Osetrov</li>
            <li>Joseph Walsh</li>
          </ul>
          <p>So put it in the press and let them read all about it!</p>
        </div>
      </div>
    </>
  );
}

export default Contribute;
