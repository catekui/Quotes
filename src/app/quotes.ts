export class Quotes {
    myInfo: boolean;
    id: number;
    quote: string;
    author: string;
    name: string;
    upvotes: number;
    downvotes: number;
    title: string
    datePosted: Date;
    


    constructor ( id:number, quote: string, title:string, author: string, name: string, datePosted: Date, upvotes: number, downvotes: number ){
        this.id = id;
        this.myInfo = true;

        this.quote = quote;
        this.author = author;
        this.name = name;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.title = title;
        this.datePosted = datePosted

    }
    }
