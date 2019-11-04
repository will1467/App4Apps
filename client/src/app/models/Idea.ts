export class Idea {
  _id: number;
  Title: string;
  Description: string;
  Author: string;
  createdAt: Number;
  updatedAt: Number;
  Likes: Number;

  constructor(title: string, description: string, author: string) {
    (this.Title = title), (this.Description = description), (this.Author = author);
  }
}
