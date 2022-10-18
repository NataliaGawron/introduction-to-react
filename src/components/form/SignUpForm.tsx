import React from "react";
import { useForm } from "react-hook-form";
import "./SignUpForm.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormInputs } from "../../types/signUp";
import { SignupSchema } from "../../validation/signUp";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  return (
    <React.StrictMode>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input {...register("firstName")} />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label>Last Name</label>
          <input {...register("lastName")} />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
          <label>Age</label>
          <input type="number" {...register("age", { valueAsNumber: true })} />
          {errors.age && <p>{errors.age.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <input type="submit" />
      </form>
    </React.StrictMode>
  );
}

export default SignUpForm;
