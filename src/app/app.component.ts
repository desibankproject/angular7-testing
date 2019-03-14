import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  
  title = 'Angular Unit Testing';

  public constructor(private movieService:MovieService){

  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data:[])=>{
        console.log(data);
    });
  }

}
