import { render, screen } from '@testing-library/react';

import NavigationBar from './NavigationBar';

describe('NavigationBar', () => {
  it('renders NavigationBar', () => {
    render(<NavigationBar />);

    expect(screen.getByRole('heading')).toHaveTextContent('Outstagram');
  });
});
