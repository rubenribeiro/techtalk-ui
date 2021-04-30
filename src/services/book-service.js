//const BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes';
const BOOKS_URL = 'https://techtalk-api.herokuapp.com/api/resources/search';
//const BOOKS_URL = 'http://localhost:4000/api/resources/search';
const findTechBooks = () => {
    const searchTerm = encodeURI("technology books")
    return fetch(`${BOOKS_URL}/${searchTerm}`)
        .then(response => response.json())
};

const findBooksBySearchTerms = (searchTerms) => {
    const searchTerm = encodeURI(searchTerms)
    return fetch(`${BOOKS_URL}/${searchTerm}`)
        .then(response => response.json())
};

const findBookById = (bookId) => {
    return fetch(`${BOOKS_URL}/detail/${bookId}`)
        .then(response => response.json())
};

const api = {
    findTechBooks,
    findBooksBySearchTerms,
    findBookById,
}

export default api;