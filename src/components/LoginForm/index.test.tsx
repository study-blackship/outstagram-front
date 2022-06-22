import { render, screen } from '@testing-library/react';

import LoginForm from '.';

describe('LoginForm', () => {
  it('renders LoginForm', () => {
    render(<LoginForm />);

    expect(screen.getByPlaceholderText('전화번호')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('비밀번호')).toBeInTheDocument();
    expect(screen.getByText('로그인')).toBeInTheDocument();
  });
});
