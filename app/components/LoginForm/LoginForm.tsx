import { FC, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import classes from './LoginForm.module.scss';
import { useClassName } from '@/hooks/useClassName';
import { AuthService } from '@/services/auth/auth.service';
import { ILogin } from '@/interfaces/login.interface';
import { useRouter } from 'next/router';

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const [globalError, setGlobalError] = useState(false);
  const username = useClassName(classes.input, classes.error);
  const password = useClassName(classes.input, classes.error);
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    const response = await AuthService.login(data as ILogin);
    reset();
    setGlobalError(!response);
    if (response) await router.push('/lk/profile');
  };

  const throwError = (
    error: boolean,
    field: ReturnType<typeof useClassName>
  ) => {
    if (error) {
      field.addClassName();
      return;
    }
    field.removeClassName();
  };

  useEffect(() => {
    throwError(!!errors.username, username);
    throwError(!!errors.password, password);
  }, [errors.username, errors.password]);

  return (
    <form
      className={classes.form}
      data-testid='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className={username.currClassName}
        data-testid='username'
        placeholder='username'
        {...register('username', { required: true })}
      />
      <input
        className={password.currClassName}
        data-testid='password'
        type='password'
        placeholder='password'
        {...register('password', { required: true })}
      />
      {globalError && <span>Введен неверно логин или пароль!</span>}
      <input className={classes.btn} value={'Войти'} type='submit' />
    </form>
  );
};

export default LoginForm;
