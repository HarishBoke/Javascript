// 3. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// Array of Object:: 


var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

const printBookStatus = book => {
    console.log(`Author: ${book.author}`)
    console.log(`Title: ${book.title}`)
    console.log(`Reading Status: ${book.readingStatus}`)
    console.log(`=======================================`)
}

const checkBookStatus = () => library.forEach(book => printBookStatus(book))

checkBookStatus()