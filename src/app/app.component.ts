import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData().subscribe(x => console.log(x))
  }

  private getData() {
    const url = 'http://localhost:8081/'
    return this.http.get<Observable<JSON>>(url).pipe(map(x => x))
  }
}
