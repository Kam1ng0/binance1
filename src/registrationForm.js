import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // Здесь можно добавить логику для отправки данных на сервер и регистрации пользователя
    navigate('/login');
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Имя пользователя</label>
          <input
            {...register('username', { required: 'Имя пользователя обязательно' })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label>Электронная почта</label>
          <input
            type="email"
            {...register('email', { 
              required: 'Электронная почта обязательна',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Введите корректный адрес электронной почты'
              }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Пароль</label>
          <input
            type="password"
            {...register('password', { required: 'Пароль обязателен' })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;
