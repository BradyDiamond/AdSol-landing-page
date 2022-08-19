import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css'

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form  className="form-1" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="First Name" {...register('firstName')} />
      <input placeholder="Last Name" {...register('lastName', { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input placeholder="E-Mail" {...register('email', { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
  );
}
export default Form;