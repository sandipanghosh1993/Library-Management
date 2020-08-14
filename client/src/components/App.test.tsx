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
});
