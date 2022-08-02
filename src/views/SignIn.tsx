import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInput } from '../components/form/FormInput';
import { SubmitButton } from '../components/form/SubmitButton';
import { getStorage, setStorage } from '../utils/storageHandlers';

interface FormValues {
  email: string;
  password: string;
}
// FIX try to get types from server
interface DefaultResponse {
  isSuccess: boolean;
  message: string;
}

export function SignIn() {
  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
    setValue,
  } = useForm<FormValues>();
  const [incorrectLoginData, isIncorrectLoginData] = useState(false);
  const navigate = useNavigate();

  const onEmailChange = () => {
    const emailValue = watch('email');
    setValue('email', emailValue);
    const credentials = getStorage('credentials');
    if (credentials && credentials.includes(emailValue)) {
      setValue('password', credentials[1]);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    // Saving data to locale storage after response from api
    const res = await fetch('http://localhost:3004/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const jsonData: DefaultResponse = await res.json();
    if (jsonData.isSuccess) {
      setStorage('credentials', [watch('email'), watch('password')]);
      navigate('/profile', {
        replace: true,
        state: {},
      });
    } else {
      isIncorrectLoginData(true);
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center p-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full p-4 space-y-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="/images/logo-megak.webp"
            alt="Logo Mega K"
          />
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            {incorrectLoginData && (
              <p className="mb-2 p-0.5 bg-[#E02735] text-white text-center text-sm">
                Hasło jest nieprawidłowe.
              </p>
            )}
            <FormInput
              {...register('email', {
                required: 'Adres e-mail jest wymagany',
                pattern: {
                  value: /.+@.+/,
                  message: 'Podano nieprawidłowy adres e-mail',
                },
                onChange: onEmailChange,
              })}
              type="email"
              placeholder="E-mail"
              error={errors.email}
            />
            <FormInput
              {...register('password', {
                required: 'Hasło jest wymagane',
              })}
              type="password"
              placeholder="Hasło"
              error={errors.password}
            />
          </div>

          <div className="flex items-center justify-end">
            <div className="text-xs">
              <Link
                className="font-medium text-gray-100 hover:text-gray-500"
                to="http://localhost:90/"
              >
                Zapomniałeś hasła?
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-100 mr-4">
              Nie masz konta?{' '}
              <Link
                to="/zarejestruj"
                className="text-xs font-medium text-gray-100 hover:text-gray-500"
              >
                Zarejestruj się
              </Link>
            </p>
            <SubmitButton text="Zaloguj się" />
          </div>
        </form>
      </div>
    </div>
  );
}
