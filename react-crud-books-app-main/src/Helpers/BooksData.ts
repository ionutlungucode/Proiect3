class BooksData{    

    public id: number;
    public title: string;
    public author: string;
    public description: string;
    public static books: any[] = [
        { id: 1, title: 'Book Alpha', author: 'Author Alpha', description: 'Description Alpha' },
        { id: 2, title: 'Book Beta', author: 'Author Beta', description: 'Description Beta' },
        { id: 3, title: 'Book Gamma', author: 'Author Gamma', description: 'Description Gamma' },
    ]

    public static databaseAltered: boolean = false;

    constructor(id: number, title: string, author: string, description: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
    }

    public static getBooks() : any[] {


        this.databaseAltered = JSON.parse(localStorage.getItem('databaseAltered') || 'false');
        //convert to boolean
        this.databaseAltered = this.databaseAltered ? true : false;

        if (this.databaseAltered) {
            this.books = JSON.parse(localStorage.getItem('books') || '[]');
        }


        return this.books;
    }

    public static addBook(book: any) {
        this.books.push(book);

        localStorage.setItem('databaseAltered', '1');
        localStorage.setItem('books', JSON.stringify(this.books));
    }

    public static getBook(id: number) {

        let book = this.books.find((book) => {
            console.log(book);
            return book.id === id;
        });

        if (!book || book === null || book === undefined || book == '' || book === false) {
            return null;
        }

        return book;
    }

    public static updateBook(id: number, book: any) {
        let bookToUpdate = this.books.find(book => book.id === id);
        if (!bookToUpdate) {
            return null;
        }
        bookToUpdate = book;

        //find the index of the book to update
        let index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            this.books[index] = bookToUpdate;
        }

        //save to local storage
        localStorage.setItem('databaseAltered', '1');
        localStorage.setItem('books', JSON.stringify(this.books));
    }
    
    public static deleteBook(id: number) {

        //delete this.books[id] -- is dangerous because it will delete the book from the array but it will leave a hole in the array with null values
        //example down below
        // [
        //     {id: 1, title: 'Book Alpha', author: 'Author Alpha', description: 'Description Alpha'},
        //     null, //this is a hole in the array
        //     {id: 3, title: 'Book Gamma', author: 'Author Gamma', description: 'Description Gamma'},
        // ];


        this.books = this.books.filter((book) => {
            return book.id !== id;
        });


        localStorage.setItem('databaseAltered', '1');
        //save to local storage
        localStorage.setItem('books', JSON.stringify(this.books));
    }



    
}

//export the getBookFromHelper function
export default BooksData;