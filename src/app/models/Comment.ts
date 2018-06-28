export class Comment {
    CommentId : string;
    IdeaId : number;
    Text : string;
    createdAt : number;
    updatedAt : number;
    Author : string;
    Likes : number;
    Exists : boolean

    constructor(text : string, author : string, idea : number){
        this.Text = text, this.Author = author, this.IdeaId = idea;
    }
}