
import "./homework-6.js";
import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";


class Book {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  read () {
    console.log(`${this.title}, ${this.description} readed`)
  }
}

class ElectronicBook extends Book {
  constructor(title, description, download) {
    super(title, description);
    this.download = download;
  }

  load() {
    console.log(`${this.title}, ${this.description} is loaded`);
  }

  read() {
    super.read();
    console.log(`download volume ${this.download}`);
  }
}

const newBook = new Book('Game of Thrones', '3k pages')
newBook.read();

const oldBook = new ElectronicBook('Game of Thrones', '3k pages', '500mb')
oldBook.load();
oldBook.read();
