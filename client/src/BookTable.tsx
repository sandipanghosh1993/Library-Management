import React from 'react';
import { Jumbotron, Container, Table, Button } from 'react-bootstrap';

interface BookTableProps {
  books: any[];
  handleBorrow: Function;
  disabled: boolean;
  borrowedbook: any;
}

class BookTable extends React.Component<BookTableProps, {}> {
  public constructor(props: BookTableProps) {
    super(props);
  }

  public render() {
    {
      return (
        <Jumbotron className="Jumbo">
          <Container>
            {this.props.books.length ? (
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>No. of Copy</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.books.map((book: any, index: number) => {
                    return (
                      <tr key={book.title}>
                        <td>{index + 1}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.noofcopy}</td>
                        <td>
                          <Button
                            variant="secondary"
                            size="sm"
                            disabled={
                              this.props.disabled ||
                              this.props.borrowedbook?.title === book.title
                            }
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
            ) : (
              <h2>No Books Available</h2>
            )}
          </Container>
        </Jumbotron>
      );
    }
  }
}

export default BookTable;
