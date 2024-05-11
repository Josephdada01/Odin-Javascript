const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

/*function addBookToLibrary(title, author, pages, read) {
  // this will add the book and push it to the mylibrary array
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}


book1 = new Book('The Prince', 'Niccolo Machiavelli', 231, "no");
book2 = new Book('The Alchemist', 'Paulo Coelho', 195, "yes");

addBookToLibrary(book1);
addBookToLibrary(book2);
*/
function addBookToLibrary(book){
    if (book instanceof Book) {
        if (book.title !== '' && book.author !== '' && book.pages !== '') {
            myLibrary.push(book);
            displayBooks();
        }
    }
}
// this is used to get the form value and add it to the library
document.getElementById('new-book-form').addEventListener('submit', function(event){
    // normally the form should save into the database
    // but prevent the default action and let my add library
    // do the work
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value; // fixed typo here
    const read = document.getElementById('read').value;
    addBookToLibrary(title, author, pages, read);
});

function displayBooks() {
    const container = document.getElementById('book-container');
    container.innerHTML = ''; // clearing the content and setting it to nothing
    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div'); // create a new div for each book
        bookDiv.classList.add('book');
        bookDiv.dataset.index = index; // associate with index in my library array
        bookDiv.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read ? 'Yes' : 'No'}</p>
        <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
        <button onclick="removeBook(${index})">Remove</button>
        `;
        container.appendChild(bookDiv);
    });
}

function removeBook(index) {
    // removing book by its array and updating
    // it by the display function
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}
