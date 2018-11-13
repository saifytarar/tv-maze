import { Injectable } from '@angular/core';
import { Show, ShowDetail } from './show/Show';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  
  serviceURL = 'http://api.tvmaze.com/';
  
  //search/shows?q=game';
  //shows/3115
  
  errorData: {};

  constructor(private httpClient: HttpClient) { }

  getShows() {
    return this.httpClient.get<any>(this.serviceURL+'shows').pipe(
      catchError(this.handleError)
    );
  }
  getShowDetail(showId){
    //console.log("ShowID to fetch:"+showId);
    return this.httpClient.get<ShowDetail>(this.serviceURL+'shows/'+showId).pipe(
      catchError(this.handleError)
      
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
