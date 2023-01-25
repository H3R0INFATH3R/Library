const main = document.querySelector('.books')
const add = document.querySelector('#add-button')
const prompt = document.querySelector('.add-prompt')
let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

let book1 = new Book('Rich Dad Poor Dad', 'Robert Kiyosaki', 262, true)
let book2 = new Book('The 7 Habits of Highly Effective People', 'Stephen R. Covey', 358, true)
let book3 = new Book('Think and Grow Rich', 'Napoleon Hill', 324, false)
addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)

for (let element in myLibrary) {
    const book = myLibrary[element]
    const displayBook = document.createElement('div')
    displayBook.classList.add('display-book')

    const displayTitle = document.createElement('p')
    displayTitle.classList.add('display-title')
    displayTitle.innerHTML = `${book.title}`
    displayBook.appendChild(displayTitle)

    const displayAuthor = document.createElement('p')
    displayAuthor.classList.add('display-author')
    displayAuthor.innerHTML = `${book.author}`
    displayBook.appendChild(displayAuthor)

    const displayPages = document.createElement('p')
    displayPages.classList.add('display-pages')
    displayPages.innerHTML = `${book.pages} pages`
    displayBook.appendChild(displayPages)

    const displayStatus = document.createElement('p')
    displayStatus.classList.add('display-status')
    if (book.read) {
        displayStatus.innerHTML = 'Read'
        displayStatus.style.color = 'green'
    } else {
        displayStatus.innerHTML = 'Not Read'
        displayStatus.style.color ='red'
    }
    displayBook.appendChild(displayStatus)

    main.appendChild(displayBook)
}

add.addEventListener('click', () => {
    prompt.classList.add('add-prompt-show')
})