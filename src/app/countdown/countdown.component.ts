import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  constructor() { }

  @Input() time!: string

  timer$!: Observable<Date>

  ngOnInit(): void {
    const launch = new Date(this.time).getTime()
    this.timer$ = interval(1000).pipe(map(_ => {
      return new Date(launch - Date.now())
    }))
  }
}
