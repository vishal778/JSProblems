class Books {
    constructor(title,author) {
        this.title = title;
        this.author = author;
    }
    
    getTitle(){
        return "Title: " + this.title;
    }
    
    getAuthor(){
        return "Author: " + this.author;
    }
}

var PP = new Books("Pride and Prejudice","Jane Austen");
var H = new Books("Hamlet","William Shakespeare");
var WP = new Books("War and Peace","Leo Tolstoy");

console.log(PP.title, '\n', PP.author);
console.log(PP.author);
console.log(PP.getTitle());
console.log(PP.getAuthor());