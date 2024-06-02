import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // Здесь можно добавить логику для отправки данных на сервер и аутентификации пользователя
    login();
    navigate('/');
  };

  return (
    <div>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Имя пользователя</label>
          <input
            {...register('username', { required: 'Имя пользователя обязательно' })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label>Пароль</label>
          <input
            type="password"
            {...register('password', { required: 'Пароль обязателен' })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
