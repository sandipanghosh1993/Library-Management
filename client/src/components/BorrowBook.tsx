import React from 'react';
import { Button, OverlayTrigger, Popover, Table } from 'react-bootstrap';
import axios from 'axios';

const ROOT_URL = 'http://localhost:8000';

interface BorrowBookProps {
  user: any;
  handleReturn: Function;
}

class BorrowBook extends React.Component<BorrowBookProps, {}> {
  public constructor(props: BorrowBookProps) {
    super(props);
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
                <Table bordered hover>
                  <tbody>
                    {this.props.user?.borrowedbooks.map((book: any) => {
                      return (
                        <tr key={book.title}>
                          <td>
                            <strong>{book.title}</strong>
                          </td>
                          <td>
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => {
                                this.props.handleReturn(book);
                              }}
                            >
                              Return
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
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
