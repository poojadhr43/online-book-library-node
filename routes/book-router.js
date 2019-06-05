var express = require('express');
var BookModel = require('../model/book-model');

var router = express.Router();

router.get('/getBooks', function(req, res, next) {
  res.send(BookModel.getBooks());
});

router.post('/addBook', function(req, res) {
  let book = new BookModel(req.body);
  let data = BookModel.add(book);
  res.send(data);
});

router.post('/updateBook', function(req, res) {
  let book = new BookModel(req.body);
  let data = BookModel.updateBook(book);
  res.send(data);
});
/* let book = {
  bookId: 5,
  title: 'Update test',
  subtitle: 'The Definitive Guide for JavaScript Developers',
  author: 'Nicholas C. Zakas',
  published: '2016-09-03T00:00:00.000Z',
  publisher: 'No Starch Press',
  pages: 352,
  description:
    'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.',
  count: 75
}; */

module.exports = router;
