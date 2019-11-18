import React from "react";

const API_KEY = "73b19491b83909c7e07016f4bb4644f9:2:60667290";
const LIST_NAME = "hardcover-fiction";
const API_STEM = "https://api.nytimes.com/svc/books/v3/lists";

const mock = [
    {
        book_image: 'https://media.gettyimages.com/photos/single-red-book-on-a-white-surface-picture-id173015527?s=612x612',
        title: 'title1',
        author: 'author1'
    },
    {
        book_image: 'https://media.gettyimages.com/photos/single-red-book-on-a-white-surface-picture-id173015527?s=612x612',
        title: 'title2',
        author: 'author2'
    },
    {
        book_image: 'https://media.gettyimages.com/photos/single-red-book-on-a-white-surface-picture-id173015527?s=612x612',
        title: 'title3',
        author: 'author3'
    }
];

function fetchBooks(list_name = LIST_NAME) {
    let url = `${API_STEM}/${LIST_NAME}?response-format=json&api-key=${API_KEY}`;

    if(true) {
        return Promise.resolve(mock);
    }
    return fetch(url)
        .then(response => response.json())
        .then(responseJson => {
            return responseJson.results.books;
        })
        .catch(error => {
            console.error(error);
        });
}

export default { fetchBooks: fetchBooks };