import { QuoteTextComponent } from './components/quote-text/quote-text.component';
import { TestBed, async,tick,fakeAsync  } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MovieService } from './movie.service';
import { Observable } from 'rxjs';
import { Movie } from './movie';



let component: AppComponent;
let movieService: MovieService;

const moviesMockData = [
    { _id: "5c6d9d07df87dc0ee0085847", title: 'HERO2',director:"SANTOSHI",year:2018},
    { _id: "5c6d9d07df87dc0ee0085848", title: 'HERO3',director:"Amogha",year:2016},
    { _id: "5c6d9d07df87dc0ee0085849", title: 'HERO5',director:"Jack",year:2020},
    { _id: "5c6d9d07df87dc0ee0085850", title: 'HERO6',director:"Robert",year:2021},
  ];

describe('AppComponent', () => {
  const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        QuoteTextComponent
      ],
      imports: [
        RouterModule.forRoot(routes),HttpClientModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },MovieService
      ]
    }).compileComponents();
    component = TestBed.createComponent(AppComponent).componentInstance;
    movieService = TestBed.get(MovieService);
    
    const moviesObservable = new Observable(observer => {
      setTimeout(() => {
          observer.next(moviesMockData);
      },0);
    });

    spyOn(movieService, 'getMovies').and.returnValue(moviesObservable);
    
  }));


  it('Test all the movies are loaded', fakeAsync(() => {
    component.ngOnInit();
    //	We issue a tick() which blocks execution and waits for all the pending promises to be resolved.
    // i was getting an error when making asynchronous call
    tick(); (3)
    console.log("@)@)");
    console.log(component.movies);
   // expect(movieService.getMovies).toHaveBeenCalled();
    //expect(component.movies).toBe(moviesMockData);
    expect(component.movies.length).toBe(4);
    expect(component.movies[0].title).toEqual('HERO2');
    expect(component.movies[1].title).toEqual('HERO3');
    expect(component.movies[2].title).toEqual('HERO5');
    expect(component.movies[3].title).toEqual('HERO6');
  

  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Angular Unit Testing'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Unit Testing');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Angular Unit Testing!');
  }));
});
