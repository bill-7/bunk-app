import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crew, Launch, Rocket } from '../index'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input() launch!: Launch

  rocket!: Rocket
  crew!: Crew

  ngOnInit(): void {
    this.getRocketData(this.launch.rocket).subscribe(r => this.rocket = r)

    if (this.launch.crew.length > 0)
      this.getCrewData(this.launch.crew[0]).subscribe(c => this.crew = c)
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


