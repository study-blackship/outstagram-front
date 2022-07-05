import { render, screen } from '@testing-library/react';

import Avatar from './Avatar';

test('Avatar', () => {
  render(<Avatar>Hello</Avatar>);

  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
