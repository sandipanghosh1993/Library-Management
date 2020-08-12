import React from 'react';
import {
  Jumbotron,
  Container,
  Button,
  Form,
  Col,
  Table
} from 'react-bootstrap';
import BookTable from './BookTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

const ROOT_URL = 'http://localhost:8000';

interface AppProps {}

interface AppState {
  books: any[];
  renderTable: Boolean;
}

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
    this.state = {
      books: [],
      renderTable: false
    };
  }

  public async fetchBooks() {
    if (!this.state.renderTable) {
      try {
        const response: any = await axios.get(ROOT_URL + '/books');
        this.setState({
          books: response.data.books,
          renderTable: true
        });
      } catch (err) {
        console.error(err);
      }
    }
  }

  public render() {
    return (
      <div className="App">
        <h1>Welcome to town library</h1>
        <Button
          variant="secondary"
          size="lg"
          onClick={this.fetchBooks.bind(this)}
        >
          Display Available Books
        </Button>
        {this.state.renderTable ? <BookTable books={this.state.books} /> : null}
      </div>
    );
  }
}

export default App;
