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

*/
function addBookToLibrary(book){
    if (book instanceof Book) {
        if (book.title !== '' && book.author !== '' && book.pages !== '') {
            myLibrary.push(book);
            displayBooks();
        }
    }
}

function displayBooks() {
    const container = document.getElementById('book-container');
    container.innerHTML = ''; // clear the initial values

    myLibrary.forEach((book, index) => {
        container.appendChild(createBookCard(book, index));
    });
}

function createBookDetails(book) {
    const bookDetails = document.createElement('div')
    bookDetails.classList.add('book-details');

    const ul = document.createElement('ul');

    const titleLi = document.createElement('li');
    titleLi.textContent = `Title: ${book.title}`;
    ul.appendChild(titleLi);

    const authorLi = document.createElement('li');
    authorLi.textContent = `Author: ${book.author}`;
    ul.appendChild(authorLi);

    const pagesLi = document.createElement('li');
    pagesLi.textContent = `Pages: ${book.pages}`;
    ul.appendChild(pagesLi);

    const readLi = document.createElement('li');
    readLi.textContent = `Read: ${book.read}`;
    ul.appendChild(readLi);

    bookDetails.appendChild(ul);
    return bookDetails;
}

function createBookCard(book, index) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const bookDetails = createBookDetails(book);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const toggleReadButton = document.createElement('button');
    toggleReadButton.textContent = 'Toggle Read';
    toggleReadButton.addEventListener('click', () => toggleReadStatus(index));

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeBook(index));

    buttonsContainer.appendChild(toggleReadButton);
    buttonsContainer.appendChild(removeButton);

    bookCard.appendChild(bookDetails);
    bookCard.appendChild(buttonsContainer);

    return bookCard;
}
// this is used to get the form value and add it to the library
/*document.getElementById('new-book-form').addEventListener('submit', function(event){
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
*/
/*function displayBooks() {
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
*/

function toggleReadStatus(index) {
    myLibrary[index].read = myLibrary[index].read === 'yes' ? 'no' : 'yes';
    displayBooks();
}

function removeBook(index) {
    // removing book by its array and updating
    // it by the display function
    myLibrary.splice(index, 1);
    displayBooks();
}
document.getElementById('new-book-button').addEventListener('click', () => {
    const dialog = document.getElementById('new-book-dialog');
    dialog.showModal();
});
document.getElementById('cancel-button').addEventListener('click', () => {
    const dialog = document.getElementById('new-book-dialog');
    dialog.close();
});
document.getElementById('book-form').addEventListener('submit', event => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);

    const dialog = document.getElementById('new-book-dialog');
    dialog.close();
});

const book1 = new Book('The Prince', 'Niccolo Machiavelli', 231, "no");
const book2 = new Book('The Alchemist', 'Paulo Coelho', 195, "yes");

addBookToLibrary(book1);
addBookToLibrary(book2);