import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/api.notepad.com/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  getNotes(): Observable<any> {
    return this.http.get(endpoint + 'notes').pipe(
      map(this.extractData));
  }

  getNote(id): Observable<any> {
    return this.http.get(endpoint + 'notes/' + id).pipe(
      map(this.extractData));
  }

  addNote (note): Observable<any> {
    console.log(note);
    return this.http.post<any>(endpoint + 'notes', JSON.stringify(note), httpOptions).pipe(
      tap((a) => alert(a.message)),
      catchError(this.handleError<any>('Note'))
    );
  }

  updateNote (id, note): Observable<any> {
    return this.http.put(endpoint + 'notes/' + id, JSON.stringify(note), httpOptions).pipe(
      tap(_ => alert(`updated notes id=${id}`)),
      catchError(this.handleError<any>('updateNote'))
    );
  }

  deleteNote (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'notes/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted note id=${id}`)),
      catchError(this.handleError<any>('deleteNote'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      alert(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
