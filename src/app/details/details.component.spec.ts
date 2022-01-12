import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Launch, Rocket } from '..';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  const mockLaunch: Launch = {
    crew: [],
    date_utc: new Date().getTime().toString(),
    flight_number: 1,
    id: "123",
    name: "mock",
    rocket: "rock"
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [
        HttpClientModule,
      ],
    })
      .compileComponents();
  });



  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    component.launch = mockLaunch
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
