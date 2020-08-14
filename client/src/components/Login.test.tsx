import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('BorrowBook', () => {
  beforeEach(() => {
    render(<Login isLoggedIn={() => {}} />);
  });

  it('should render correct input field', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render correct login button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
