
type Book = {
    title: string;
    author: string;
    year?: number;
    isAvailable: boolean;
};

const book1: Book = {
    title: "Война и мир",
    author: "Л.Н. Толстой",
    year: 1869,
    isAvailable: true
}

const book2: Book = {
    title: "Новая книга",
    author: "Автор",
    isAvailable: true
};

function bookIsAvailable(book: Book): void {
    if (book.isAvailable) {
        console.log(`Год издания книги "${book.title}" - ${book.year !== undefined ? book.year : "неизвестно"}`);
    }
}

bookIsAvailable(book1);
bookIsAvailable(book2);