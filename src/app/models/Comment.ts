export class Comment {
    CommentId : string;
    IdeaId : string;
    Text : string;
    createdAt : number;
    updatedAt : number;
    Author : string;
    Likes : number;

    constructor(text : string, author : string, idea : string){
        this.Text = text, this.Author = author, this.IdeaId = idea;
    }
}