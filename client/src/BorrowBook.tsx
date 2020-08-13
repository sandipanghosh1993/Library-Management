import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ROOT_URL = 'http://localhost:8000';

interface BorrowBookProps {
  user: any;
}

interface BorrowBookState {
  user: any;
}

class BorrowBook extends React.Component<BorrowBookProps, BorrowBookState> {
  public constructor(props: BorrowBookProps) {
    super(props);
    this.state = {
      user: null
    };
  }

  public render() {
    return (
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={
          <Popover id="popover-positioned-bottom">
            <Popover.Content>
              {this.props.user?.borrowedbooks.length ? (
                this.props.user?.borrowedbooks.map((e: any, i: number) => {
                  return (
                    <div key={i}>
                      <strong>{e.title}</strong>
                    </div>
                  );
                })
              ) : (
                <strong>No books</strong>
              )}
            </Popover.Content>
          </Popover>
        }
      >
        <Button variant="secondary" size="lg">
          Borrowed Books
        </Button>
      </OverlayTrigger>
    );
  }
}

export default BorrowBook;
