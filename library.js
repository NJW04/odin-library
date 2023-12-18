const myLibrary = [];
let libraryCounter = 0; 

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
        card.classList.add("card","card-"+i); //maybe add i index to keep track?
        
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

        const allDeleteBtns = Array.from(document.querySelectorAll('.delete-btn'));
        for(const deleteButton of allDeleteBtns){
          deleteButton.addEventListener('click', () => {
            let arrayIndex = deleteButton.parentElement.parentElement.className.replace(/\D/g, ''); //only getting the array index number
            myLibrary.splice(arrayIndex, 1);
            while (bookContainer.firstChild) {
              bookContainer.removeChild(bookContainer.lastChild);
            }
            displayBooks();
          })
        }

        const allToggleBtns = Array.from(document.querySelectorAll('.toggle-btn'));
        for(const toggleButton of allToggleBtns){
          toggleBtn.addEventListener('click', () => {
            let arrayIndex = toggleBtn.parentElement.parentElement.className.replace(/\D/g, ''); //only getting the array index number
            let currentBook = myLibrary[arrayIndex];
            if (currentBook.readStatus == "I have not been read"){
              currentBook.readStatus = "I have been read";
            }else{
              currentBook.readStatus = "I have not been read";
            }

            while (bookContainer.firstChild) {
              bookContainer.removeChild(bookContainer.lastChild);
            }
            displayBooks();
          })
        }
    }
}



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
const formm = document.querySelector("form");
formm.addEventListener("submit", (event) => {
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
  libraryCounter++;
  addBookToLibrary(newBook);
  while (bookContainer.firstChild) {
    bookContainer.removeChild(bookContainer.lastChild);
  }
  displayBooks();
  dialog.close();
  
})

window.onload = (event) => {
    libraryCounter = 0; 
  };