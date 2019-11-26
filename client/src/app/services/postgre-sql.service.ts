import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { isDevMode } from "@angular/core";

import { Idea } from "../models/Idea";
import { User } from "../models/User";
import { Comment } from "../models/Comment";

@Injectable()
export class PostgreSqlService {
  private server = "";

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) {
    if (isDevMode()) {
      this.server = "http://localhost:5000";
    } else {
      this.server = "https://app4apps.herokuapp.com";
    }
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token")
    });
  }

  getIdeas(): Observable<Idea[]> {
    return this.http
      .get<Idea[]>(this.server + "/api/idea", { headers: this.getHeaders() })
      .pipe(catchError(this.handleError("getIdeas", [])));
  }

  getComments(user): Observable<Comment[]> {
    return this.http
      .get<Comment[]>(this.server + "/api/comment", {
        headers: this.getHeaders(),
        params: { IdeaId: user }
      })
      .pipe(catchError(this.handleError<Comment[]>("getComments", [])));
  }

  addIdea(idea: Idea) {
    return this.http
      .post<Object>(this.server + "/api/idea", idea, {
        headers: this.getHeaders()
      })
      .pipe(catchError(this.handleError<Object>("addIdea")));
  }

  addComment(comment: Comment) {
    return this.http
      .post<Object>(this.server + "/api/comment", comment, {
        headers: this.getHeaders()
      })
      .pipe(catchError(this.handleError<Object>("addComment")));
  }

  deleteComment(comment: Comment) {
    return this.http
      .delete<Comment>(this.server + "/api/comment?id=" + comment._id, {
        headers: this.getHeaders()
      })
      .pipe(catchError(this.handleError<Comment>("commentDelete")));
  }

  register(
    username: string,
    password: string,
    email: string
  ): Observable<Object> {
    var newUser = new User(username, password, email);
    return this.http
      .post<Object>(this.server + "/api/user", newUser)
      .pipe(catchError(this.handleError<Object>("register")));
  }

  login(username: string, password: string) {
    return this.http
      .post<Object>(this.server + "/api/user/login", {
        Username: username,
        Password: password
      })
      .pipe(catchError(this.handleError<Object>("login")));
  }

  deleteIdea(idea: Idea) {
    return this.http
      .delete<Idea>(this.server + "/api/idea?id=" + idea._id, {
        headers: this.getHeaders()
      })
      .pipe(catchError(this.handleError<Idea>("ideaDelete")));
  }

  deleteAccount(userId: string) {
    return this.http
      .delete<Object>(this.server + "/api/user?id=" + userId, {
        headers: this.getHeaders()
      })
      .pipe(catchError(this.handleError<Idea>("userDelete")));
  }

  authenticate(): Observable<boolean> {
    return this.http
      .get<boolean>(this.server + "/api/user/auth", {
        headers: this.getHeaders()
      })
      .pipe(catchError(this.handleError<boolean>("authenticate")));
  }

  likeIdea(idea: Idea) {
    return this.http
      .post<Idea>(this.server + "/api/idea/like", idea, {
        headers: this.getHeaders()
      })
      .pipe(catchError(this.handleError<Idea>("likeIdea")));
  }

  likeComment(comment: Comment) {
    return this.http
      .post<Comment>(this.server + "/api/comment/like", comment, {
        headers: this.getHeaders()
      })
      .pipe(catchError(this.handleError<Comment>("likeComment")));
  }
}
