const expect = require('expect');
const request = require('supertest');
const {app} = require('./../server');
const {Book} = require('./../models/book');

describe('GET /books', () => {
  const books = [
	  {title: "Song of Solomon", author: "Toni Morrison"},
	  {title: "Ulysses", author: "James Joyce"}
	 ];

  it('should get request', (done) => {
    request(app)
      .get('/books')
      .send(books)
      .expect(200)
      .end(done);
  });
});
