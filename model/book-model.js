const fs = require('fs');
var Book = function(data) {
  this.data = data;
};
Book.prototype.data = {};
Book.prototype.updateBook = function(data) {
  this.data = data;
};

Book.updateBook = function(book) {
  let bookList = this.getBooks();
  for (let i = 0; i <= bookList.length; i++) {
    if (book.data.bookId === bookList[i].bookId) {
      bookList[i] = Object.assign({}, book.data);
      break;
    }
  }
  this.writeToJson(bookList);
  return bookList;
};
Book.add = function(data) {
  let bookList = this.getBooks();
  bookId = { bookId: bookList.length + 1 };
  data = Object.assign({}, bookId, data.data);
  bookList.push(data);
  this.writeToJson(bookList);
  return bookList;
};
Book.writeToJson = function(book) {
  let bookStr = JSON.stringify(book);
  fs.writeFile('./public/data/book.json', bookStr, (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });
};
Book.getBooks = function() {
  let rawdata = fs.readFileSync('./public/data/book.json');
  let book = JSON.parse(rawdata);
  return book;
};

module.exports = Book;
