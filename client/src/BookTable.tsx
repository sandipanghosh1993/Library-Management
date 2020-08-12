import React from 'react';
import { Jumbotron, Container, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AppProps {
  books: any[];
}

interface AppState {}

class BookTable extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
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
