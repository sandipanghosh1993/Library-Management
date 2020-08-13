import React from 'react';
import { Jumbotron, Container, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ROOT_URL = 'http://localhost:8000';

interface BookTableProps {
  books: any[];
  handleBorrow: Function;
  disabled: boolean;
}

interface BookTableState {}

class BookTable extends React.Component<BookTableProps, BookTableState> {
  public constructor(props: BookTableProps) {
    super(props);
    this.state = {};
  }

  public render() {
    {
      return this.props.books.length ? (
        <Jumbotron className="Jumbo">
          <Container>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.props.books.map((book: any, index: number) => {
                  return (
                    <tr key={book.title}>
                      <td>{index + 1}</td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>
                        <Button
                          variant="secondary"
                          size="sm"
                          disabled={this.props.disabled}
                          onClick={() => {
                            this.props.handleBorrow(book);
                          }}
                        >
                          {' '}
                          Borrow
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </Jumbotron>
      ) : (
        <h2>No Books Available</h2>
      );
    }
  }
}

export default BookTable;
