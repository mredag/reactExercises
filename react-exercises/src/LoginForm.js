import React from 'react';
import useForm from './useForm';

function LoginForm() {
  const [values, handleChange] = useForm({ username: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input name="username" value={values.username} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input name="password" type="password" value={values.password} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
