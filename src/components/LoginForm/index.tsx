import Link from 'next/link';
import { useState } from 'react';
import type {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';
import { useController, useForm } from 'react-hook-form';

import Input from '../Input';

const LoginForm = () => {
  const [string, setString] = useState('');
  const { control, handleSubmit } = useForm();

  const {
    field: { ref: phoneNumberRef, ...phoneNumberField },
  } = useController({
    control,
    name: 'phoneNumber',
  });
  const {
    field: { ref: passwordRef, ...passwordField },
  } = useController({ control, name: 'password' });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setString(JSON.stringify(data));
  };
  const onSubmitError: SubmitErrorHandler<FieldValues> = () => {};

  return (
    <>
      <button type="button">Facebook으로 계속하기</button>

      <div>또는</div>

      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
        <Input placeholder="전화번호" type="text" {...phoneNumberField} />
        <Input placeholder="비밀번호" type="password" {...passwordField} />

        <Link href="/">
          <a>비밀번호를 잊으셨나요?</a>
        </Link>

        <button type="submit">로그인</button>
      </form>
      {string}
    </>
  );
};

export default LoginForm;
