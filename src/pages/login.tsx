import type { NextPage } from 'next';
import LoginForm from 'src/components/LoginForm';

const Login: NextPage = () => {
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  );
};

export default Login;
