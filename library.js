const myLibrary = [];

const bookContainer = document.querySelector(".book-container");


function Book(title,author,pages,readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages" + ", " + read;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
  }

function displayBooks(){
    for (let i=0; i<myLibrary.length;i++){
        const curBook = myLibrary[i];

        const card = document.createElement('div');
        card.style.width = "250px";
        card.style.height = "250px";
        card.classList.add("card"); //maybe add i index to keep track?
        
        const titleText = document.createElement('div');
        titleText.textContent = "Title: " + curBook.title;

        const authorText = document.createElement('div');
        authorText.textContent = "Author: " + curBook.author;

        const numPages = document.createElement('div');
        numPages.textContent = "Number of Pages: " + curBook.pages;

        const readStatus = document.createElement('div');
        readStatus.textContent = "Read Status: " + curBook.readStatus;

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'toggle-btn';
        toggleBtn.textContent = "Toggle Read Status";

        const bookDeleteBtn = document.createElement('button');
        bookDeleteBtn.className = 'delete-btn';
        bookDeleteBtn.textContent = "Delete Me!";

        const btnContainer = document.createElement('div');
        btnContainer.className = "btn-container";
        btnContainer.append(bookDeleteBtn);
        btnContainer.append(toggleBtn);

        card.append(titleText);
        card.append(authorText);
        card.append(numPages);
        card.append(readStatus);
        card.append(btnContainer);

        bookContainer.append(card);
    }
}

const deleteButtons = document.querySelectorAll('.delete-btn');

const allDeleteBtns = Array.from(document.querySelectorAll('.delete-btn'));


//Button to open book info form
const dialog = document.querySelector("dialog");
const form = document.querySelector("form")
const addButton = document.querySelector('.add-button');
addButton.addEventListener('click', () => {
  form.reset();
  dialog.showModal();
})

const exitButton = document.querySelector('#exit-button');
exitButton.addEventListener('click', () =>{
  dialog.close();
})

//Adding a book to library button
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const titleInfo = document.querySelector("#title").value;
  const authorInfo = document.querySelector("#author").value;
  const numPages = document.querySelector("#num-pages").value;
  let readStatus = "";
  if (document.querySelector('#readYes').checked){
    readStatus = "I have been read";
  }else{
    readStatus = "I have not been read";
  }
  const newBook = new Book(titleInfo,authorInfo,numPages,readStatus);
  addBookToLibrary(newBook);
  while (bookContainer.firstChild) {
    bookContainer.removeChild(bookContainer.lastChild);
  }
  displayBooks();
  dialog.close();
  
})

window.onload = (event) => {
    /*
    const book1 = new Book("Ant Farm Test", "Nathan Wells",100,"Read");
    const book2 = new Book("Pig Farm", "Jack Wells",150,"Read");
    const book3 = new Book("Dog Farm", "Heir Wells",10,"Not Read");
    const book4 = new Book("Dog Farm", "Heir Wells",10,"Not Read");
    const book5 = new Book("Dog Farm", "Heir Wells",10,"Not Read");
  
    addBookToLibrary(book1);
    addBookToLibrary(book2);
    addBookToLibrary(book3);
    addBookToLibrary(book4);
    addBookToLibrary(book5);
    displayBooks();*/
  };