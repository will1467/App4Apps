import { Injectable } from '@angular/core';
     
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Idea } from './Idea';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'})
};




@Injectable()
export class PostgreSqlService {
  private server = "http://localhost:8888";

   /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); // log to console instead
    console.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


  constructor(private http: HttpClient) { }

  getIdeas() : Observable<Idea[]>{
    return this.http.get<Idea[]>(this.server + "/ideaget")
      .pipe(
        tap(ideas => console.log('fetched ideas')),
        catchError(this.handleError('getIdeas', []))
      )
  }

  addIdea(idea : Idea) : Observable<Idea>{
    return this.http.post<Idea>(this.server + "/ideacreate", idea, httpOptions).pipe(
      catchError(this.handleError<Idea>('addIdea'))
    )
  }

  register(username : string, password : string, email : string) : Observable<Object>{

    var postOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'})
    }

    var newUser = {
      Username : username,
      Password : password,
      Email : email
    }
    return this.http.post<Object>(this.server + "/usercreate", newUser, postOptions).pipe(
      catchError(this.handleError<Object>('register'))
    )
  }

  login(username : string, password : string){
    return this.http.post<Object>(this.server + "/login", {Username : username, Password: password}, httpOptions).pipe(
      catchError(this.handleError<Object>('login'))
    )
  }

}
