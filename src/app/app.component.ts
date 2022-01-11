import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  getRocketData(rocketId: string) {
    const url = `http://localhost:8081/rocket/${rocketId}`
    return this.http.get<Rocket>(url)
  }

  getCrewData(crewId: string) {
    const url = `http://localhost:8081/crew/${crewId}`
    return this.http.get<Crew>(url)
  }
}

interface Launch {
  id: string
  name: string
  date_utc: string
  flight_number: number
  rocket: string
}

interface Rocket {
  flickr_images: string[]
  name: string
}

interface Crew {

}