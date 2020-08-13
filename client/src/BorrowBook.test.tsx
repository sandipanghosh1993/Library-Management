import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import BorrowBook from './BorrowBook';

describe('BorrowBook', () => {
  beforeEach(() => {
    render(
      <BorrowBook user={{ borrowedbooks: [{ title: 'XYZ', author: 'abc' }] }} />
    );
  });

  it('should render correct button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Borrowed Books')).toBeInTheDocument();
  });

  it('should render correct popup', async () => {
    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
    });
    expect(screen.getByText('XYZ')).toBeInTheDocument();
  });
});
