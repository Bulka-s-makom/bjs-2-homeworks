class PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
  this.name = name;
  this.releaseDate = releaseDate;
  this.pagesCount = pagesCount;
  this.state = 100;
  this.type = null;
  }
  fix() {
  this.state += this._state * 0.5;
  }
  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }
  get state() {
  return this._state;
  }
}

class Magazine extends PrintEditionItem {
  type = "magazine";
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
  super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
  fix() {
    super.fix();
  };
}

class NovelBook extends Book {
  type = "novel";
}

class FantasticBook extends Book {
  type = "fantastic";
}

class DetectiveBook extends Book {
  type = "detective";
}

class Library {
  constructor (name, books) {
    this.name = name;
    this.books = [];
    this.state = 100;
  }

  addBook(book) {
    if (this.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const book = this.books.find((book) => book[type] === value);
    return book || null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex((book) => book.name === bookName);
    if (index !== -1) {
      const [book] = this.books.splice(index, 1);
      return book;
    }
    return null;
  }
}