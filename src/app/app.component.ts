import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) { }

  launches$!: Launch[]

  ngOnInit() {
    this.getData().subscribe(data => {
      console.log(data)
      this.launches$ = data
    })
  }

  private getData() {
    const url = 'http://localhost:8081/launches'
    return this.http.get<Launch[]>(url)
  }
}

interface Launch {
  id: string
  name: string
  date_utc: string
}