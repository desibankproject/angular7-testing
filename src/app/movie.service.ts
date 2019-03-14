import { Injectable,Inject  } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Movie } from './movie';
import { MOVIES_API_URL } from './config';
import { Observable } from 'rxjs';
@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  public getMovies():Observable<Movie[]>{
    //const endpoint = this.apiUrl;
    return this.http.get<Movie[]>("http://localhost:4000/api/v3/tmovies");
  }
}
