import { TestBed, async, inject } from '@angular/core/testing';
import {
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';

import { MovieService } from './movie.service';
import { Movie } from './movie';
import { HttpClientModule } from '@angular/common/http';
describe('MovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MovieService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  
  describe('getMovies()', () => {

      
  it('should be created', inject([MovieService,XHRBackend], (service: MovieService,mockBackend:XHRBackend) => {
    expect(service).toBeTruthy();
  }));


    it('should return an Observable<Movie[]>',
    inject([MovieService, XHRBackend], (movieService, mockBackend) => {

      const mockResponse = {
        data: [
          { _id: "5c6d9d07df87dc0ee0085847", title: 'HERO2',director:"SANTOSHI",year:2018},
          { _id: "5c6d9d07df87dc0ee0085848", title: 'HERO3',director:"Amogha",year:2016},
          { _id: "5c6d9d07df87dc0ee0085849", title: 'HERO5',director:"Jack",year:2020},
          { _id: "5c6d9d07df87dc0ee0085850", title: 'HERO6',director:"Robert",year:2021},
        ]
      };

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
           body: JSON.stringify(mockResponse)
        })));
      });

      movieService.getMovies().subscribe((movies) => {
        expect(movies.length).toBe(4);
        expect(movies[0].title).toEqual('HERO2');
        expect(movies[1].title).toEqual('HERO3');
        expect(movies[2].title).toEqual('HERO5');
        expect(movies[3].title).toEqual('HERO6');
      });

    }));
   });

 
});
