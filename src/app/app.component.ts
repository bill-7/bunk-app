import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Launch } from '.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) { }

  launches!: Launch[]

  ngOnInit() {
    this.getLaunchData().subscribe(data => this.launches = data)
  }

  private getLaunchData() {
    const url = `http://localhost:8081/launches`
    return this.http.get<Launch[]>(url)
  }
}


