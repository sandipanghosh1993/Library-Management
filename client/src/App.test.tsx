import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should render correct header text', () => {
    expect(screen.getByText('Welcome to town library')).toBeInTheDocument();
  });

  it('should render correct display button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Display Available Books')).toBeInTheDocument();
  });
});
