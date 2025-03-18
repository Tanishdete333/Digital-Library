// document.addEventListener('DOMContentLoaded', () => {
//     const modal = document.getElementById('modal');
//     const openModalBtn = document.getElementById('openModalBtn');
//     const closeModalBtn = document.getElementById('closeModalBtn');
// const bookForm = document.getElementById('Form1');
//     const bookNameInput = document.getElementById('bookName');
//     const bookLinkInput = document.getElementById('bookLink');
    
//     // Open modal
//     openModalBtn.addEventListener('click', () => {
//         modal.style.display = 'block';
//     });

//     // Close modal
//     closeModalBtn.addEventListener('click', () => {
//         modal.style.display = 'none';
//     });

//     // Close modal when clicking outside of modal content
//     window.addEventListener('click', (event) => {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });

//     // Save book data
//     bookForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const bookName = bookNameInput.value.trim();
//         const bookLink = bookLinkInput.value.trim();

//         if (bookName && bookLink) {
//             let books = JSON.parse(localStorage.getItem('books')) || [];
//             books.push({ bookName, bookLink });
//             localStorage.setItem('books', JSON.stringify(books));
            
//             // Clear form and close modal
//             bookNameInput.value = '';
//             bookLinkInput.value = '';
//             modal.style.display = 'none';
//             alert('Book saved successfully!');
//         }
//     });

//     // Load saved books on page load (if needed)
//     const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
//     if (savedBooks.length) {
//         console.log('Saved Books:', savedBooks);
//         // Here you can display or use the saved books as needed
//     }
// });







// document.addEventListener('DOMContentLoaded', () => {
//     const modal2 = document.getElementById('modal2');
//     const openModalBtn2 = document.getElementById('openModalBtn2');
//     const closeModalBtn2 = document.getElementById('closeModalBtn2');
//     const bookForm = document.getElementById('Form2');
//     const AuthorNameInput = document.getElementById('Author Name');
//     const PublishedDateInput = document.getElementById('Published Date');
//     const bookNameInput = document.getElementById('bookName');
//     const bookLinkInput = document.getElementById('bookLink');

//     // Open modal
//     openModalBtn2.addEventListener('click', () => {
//         modal2.style.display = 'block';
//     });

//     // Close modal
//     closeModalBtn2.addEventListener('click', () => {
//         modal2.style.display = 'none';
//     });

//     // Close modal when clicking outside of modal content
//     window.addEventListener('click', (event) => {
//         if (event.target === modal) {
//             modal2.style.display = 'none';
//         }
//     });

//     // Save book data
//     bookForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const PublishedDate = PublishedDateInput.value.trim();
//         const AuthorName = AuthorNameInput.value.trim();
//         const bookLink = bookLinkInput.value.trim();

//         if ( AuthorName && PublishedDate && bookName && bookLink) {
//             let books = JSON.parse(localStorage.getItem('books')) || [];
//             books.push({ AuthorName,PublishedDate,bookName, bookLink});
//             localStorage.setItem('books', JSON.stringify(books));

//             // Clear form and close modal
//             AuthorNameInput.value='';
//             PublishedDateInput.value = '';
//             bookNameInput.value = '';
//             bookLinkInput.value = '';
//             modal.style.display = 'none';
//             alert('Book saved successfully!');
//         }
//     });

//     // Load saved books on page load (if needed)
//     const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
//     if (savedBooks.length) {
//         console.log('Saved Books:', savedBooks);
//         // Here you can display or use the saved books as needed
//     }
// });











document.addEventListener('DOMContentLoaded', () => {
    const addBookBtn = document.getElementById('addBookBtn');
    const publishBookBtn = document.getElementById('publishBookBtn');
    const addBookModal = document.getElementById('addBookModal');
    const publishBookModal = document.getElementById('publishBookModal');
    const closeAddBook = document.getElementById('closeAddBook');
    const closePublishBook = document.getElementById('closePublishBook');
    const saveBook = document.getElementById('saveBook');
    const publishBook = document.getElementById('publishBook');
    const bookList = document.getElementById('bookItems');
    const publishedBooksList = document.getElementById('publishedBooksList');

    const loadBooks = () => {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        const publishedBooks = JSON.parse(localStorage.getItem('publishedBooks')) || [];

        bookList.innerHTML = books.map(book => `<li><a href="${book.link}" target="_blank">${book.name}</a></li>`).join('');
        publishedBooksList.innerHTML = publishedBooks.map(book => `<li><a href="${book.link}" target="_blank">${book.name} by ${book.author} (Published on ${book.date})</a></li>`).join('');
    };

    const saveBookToLocalStorage = (book) => {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    };

    const savePublishedBookToLocalStorage = (book) => {
        const publishedBooks = JSON.parse(localStorage.getItem('publishedBooks')) || [];
        publishedBooks.push(book);
        localStorage.setItem('publishedBooks', JSON.stringify(publishedBooks));
    };

    addBookBtn.onclick = () => {
        addBookModal.style.display = 'block';
    };

    publishBookBtn.onclick = () => {
        publishBookModal.style.display = 'block';
    };

    closeAddBook.onclick = () => {
        addBookModal.style.display = 'none';
    };

    closePublishBook.onclick = () => {
        publishBookModal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === addBookModal) {
            addBookModal.style.display = 'none';
        }
        if (event.target === publishBookModal) {
            publishBookModal.style.display = 'none';
        }
    };

    saveBook.onclick = () => {
        const bookName = document.getElementById('bookName').value;
        const googleDriveLink = document.getElementById('googleDriveLink').value;
        if (bookName && googleDriveLink) {
            const book = { name: bookName, link: googleDriveLink };
            saveBookToLocalStorage(book);
            addBookModal.style.display = 'none';
            loadBooks();
        } else {
            alert('Please fill in both fields');
        }
    };

    publishBook.onclick = () => {
        const bookName = document.getElementById('publishBookName').value;
        const authorName = document.getElementById('publishAuthorName').value;
        const publishDate = document.getElementById('publishDate').value;
        const googleDriveLink = document.getElementById('publishGoogleDriveLink').value;
        if (bookName && authorName && publishDate && googleDriveLink) {
            const book = { name: bookName, author: authorName, date: publishDate, link: googleDriveLink };
            savePublishedBookToLocalStorage(book);
            publishBookModal.style.display = 'none';
            loadBooks();
        } else {
            alert('Please fill in all fields');
        }
    };

    loadBooks();
});
// Dummy user data for login
const users = {
    'user1': 'password1',
    'user2': 'password2'
};

// Login form submission
document.getElementById('loginForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] === password) {
        localStorage.setItem('username', username);
        window.location.href = 'entries.html';
    } else {
        document.getElementById('loginError').textContent = 'Invalid username or password';
    }
});

// Load entries page and display username and entries
if (window.location.pathname === '/entries.html') {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('usernameDisplay').textContent = username;
        loadEntries();
    } else {
        window.location.href = 'index.html';
    }
}

// Entry form submission
document.getElementById('entryForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const entry = document.getElementById('entry').value;
    const username = localStorage.getItem('username');

    if (username && entry) {
        // Retrieve existing entries from localStorage
        const entries = JSON.parse(localStorage.getItem('entries') || '{}');
        if (!entries[username]) {
            entries[username] = [];
        }
        // Add new entry
        entries[username].push(entry);
        localStorage.setItem('entries', JSON.stringify(entries));
        document.getElementById('entry').value = '';
        loadEntries();
    }
});

// Load entries into the readers list
function loadEntries() {
    const entries = JSON.parse(localStorage.getItem('entries') || '{}');
    const list = document.getElementById('readersList');
    list.innerHTML = '';

    for (const user in entries) {
        entries[user].forEach(entry => {
            const li = document.createElement('li');
            li.textContent = `${user}: ${entry}`;
            list.appendChild(li);
        });
    }
}

// Logout button functionality
document.getElementById('logoutButton')?.addEventListener('click', () => {
    localStorage.removeItem('username');
    window.location.href = 'index.html';
});







