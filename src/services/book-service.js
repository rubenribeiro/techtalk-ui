const BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes';

const findTechBooks = () => {
    const searchTerm = encodeURI("technology books")
    return fetch(`${BOOKS_URL}?q=${searchTerm}`)
        .then(response => response.json())
};

const findBooksBySearchTerms = (searchTerms) => {
    const searchTerm = encodeURI(searchTerms)
    return fetch(`${BOOKS_URL}?q=${searchTerm}`)
        .then(response => response.json())
};

const findBookById = (bookId) => {
    return fetch(`${BOOKS_URL}/${bookId}`)
        .then(response => response.json())
};

export default {
    findTechBooks,
    findBooksBySearchTerms,
    findBookById,
}