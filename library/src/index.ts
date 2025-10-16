import { Book } from './book.js'

function main(): void {
    const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295);
    
    console.log(theHobbit.info());
}

main();
