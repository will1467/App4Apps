export class User {
    UserId : number;
    UserName : string;
    Password : string;
    Email : string;

    constructor(name : string, password : string, email : string){
         this.UserName = name; this.Password = password; this.Email = email;
    }
}
