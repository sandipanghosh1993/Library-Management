import React from 'react';
import { render, screen } from '@testing-library/react';
import BookTable from './BookTable';

describe('BookTable', () => {
  describe('With books', () => {
    beforeEach(() => {
      const books = [
        { title: 'Song of Solomon', author: 'Toni Morrison' },
        { title: 'Ulysses', author: 'James Joyce' }
      ];
      render(<BookTable books={books} />);
    });

    it('should render a table', () => {
      expect(screen.getByRole('table')).toBeInTheDocument();
    });

    it('should render correct table headers', () => {
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Author')).toBeInTheDocument();
    });

    it('should render correct data', () => {
      expect(screen.getByText('Song of Solomon')).toBeInTheDocument();
      expect(screen.getByText('Toni Morrison')).toBeInTheDocument();
      expect(screen.getByText('Ulysses')).toBeInTheDocument();
      expect(screen.getByText('James Joyce')).toBeInTheDocument();
    });
  });

  describe('Without books', () => {
    beforeEach(() => {
      const books: any = [];
      render(<BookTable books={books} />);
    });

    it('should render No Books Available text', () => {
      expect(screen.getByText('No Books Available')).toBeInTheDocument();
    });
  });
});
