import React from 'react';
import { Button, Popover } from 'react-bootstrap';
import BookTable from './BookTable';
import Login from './Login';
import BorrowBook from './BorrowBook';
import axios from 'axios';
import '../styles/App.css';

const ROOT_URL = 'http://localhost:8000';

interface AppState {
  books: any[];
  renderTable: Boolean;
  login: Boolean;
  user: any;
}

class App extends React.Component<{}, AppState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      books: [],
      renderTable: false,
      login: false,
      user: null
    };
  }

  public async fetchBooks() {
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

  public isLoggedIn(bLogin: boolean, oUser: any) {
    this.setState({ login: bLogin, user: oUser });
  }

  public async handleBorrow(book: any) {
    try {
      const response: any = await axios.post(ROOT_URL + '/borrow', {
        userId: this.state.user.userId,
        book
      });
      this.setState({
        books: response.data.books,
        user: response.data.user
      });
    } catch (err) {
      console.error(err);
    }
  }

  public async handleReturn(book: any) {
    try {
      const response: any = await axios.post(ROOT_URL + '/return', {
        userId: this.state.user.userId,
        book
      });
      this.setState({
        books: response.data.books,
        user: response.data.user
      });
    } catch (err) {
      console.error(err);
    }
  }

  public render() {
    return (
      <div className="App">
        <h1>Welcome to town library</h1>
        {!this.state.login ? (
          <Login isLoggedIn={this.isLoggedIn.bind(this)} />
        ) : (
          <React.Fragment>
            <h2>Hello {this.state.user?.name}!</h2>
            <div>
              <Button
                variant="secondary"
                size="lg"
                onClick={this.fetchBooks.bind(this)}
              >
                Display Available Books
              </Button>{' '}
              <BorrowBook
                user={this.state.user}
                handleReturn={this.handleReturn.bind(this)}
              />
            </div>
          </React.Fragment>
        )}
        {this.state.renderTable ? (
          <BookTable
            disabled={this.state.user.borrowedbooks.length >= 2}
            books={this.state.books}
            handleBorrow={this.handleBorrow.bind(this)}
            borrowedbook={
              this.state.user.borrowedbooks.length === 1
                ? this.state.user.borrowedbooks[0]
                : null
            }
          />
        ) : null}
      </div>
    );
  }
}

export default App;
