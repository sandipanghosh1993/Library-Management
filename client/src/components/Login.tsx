import React from 'react';
import { Jumbotron, Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const ROOT_URL = 'http://localhost:8000';

interface LoginProps {
  isLoggedIn: Function;
}

interface LoginState {
  userId: String;
  login: Boolean;
}

class Login extends React.Component<LoginProps, LoginState> {
  public constructor(props: LoginProps) {
    super(props);
    this.state = {
      userId: '',
      login: true
    };
  }

  public async handleLogin(event: any) {
    event.preventDefault();
    try {
      const response: any = await axios.post(ROOT_URL + '/user', {
        userId: this.state.userId
      });
      this.setState({
        login: response.data.success
      });
      this.props.isLoggedIn(response.data.success, response.data.user);
    } catch (err) {
      console.error(err);
    }
  }

  public render() {
    return (
      <Jumbotron>
        <Container>
          <Form>
            {!this.state.login ? (
              <p style={{ color: 'red' }}>Invalid userId</p>
            ) : null}
            <Form.Control
              type="text"
              placeholder="Enter a valid userId"
              onChange={(event: any) => {
                this.setState({ userId: event.target.value });
              }}
            />
            <Button
              className="Login-button"
              type="submit"
              variant="secondary"
              onClick={this.handleLogin.bind(this)}
            >
              Login
            </Button>
          </Form>
        </Container>
      </Jumbotron>
    );
  }
}

export default Login;
