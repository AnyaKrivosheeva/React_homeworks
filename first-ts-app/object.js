var book1 = {
    title: "Война и мир",
    author: "Л.Н. Толстой",
    year: 1869,
    isAvailable: true
};

var book2 = {
    title: "Новая книга",
    author: "Автор",
    isAvailable: true
};

function bookIsAvailable(book) {
    if (book.isAvailable) {
        console.log("\u0413\u043E\u0434 \u0438\u0437\u0434\u0430\u043D\u0438\u044F \u043A\u043D\u0438\u0433\u0438 \"".concat(book.title, "\" - ").concat(book.year !== undefined ? book.year : "неизвестно"));
    }
}

bookIsAvailable(book1);
bookIsAvailable(book2);

// Год издания книги "Война и мир" - 1869
// Год издания книги "Новая книга" - неизвестно
