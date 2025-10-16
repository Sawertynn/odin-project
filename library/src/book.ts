export class Book {
    title: string;
    author: string;
    pageNumber: number;
    isRead: boolean;

    constructor (title: string, author: string, pageNumber: number) {
        this.title = title;
        this.author = author;
        this.pageNumber = pageNumber;
        this.isRead = false;
    }

    info(): string {
        const description = `${this.title} by ${this.author}, ${this.pageNumber} pages`
        const status = this.isRead ? 'already read' : 'not read yet';
        return `${description}, ${status}`
    }
}