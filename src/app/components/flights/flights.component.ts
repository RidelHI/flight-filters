import { Component, OnInit } from '@angular/core';
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
})
export class FlightsComponent implements OnInit {
  flightType: string[] = [];
  flightClass: string[] = [];
  passengers: any = {};
  bags: any = {};
  chipsFromArray: string[] = [];
  chipsToArray: string[] = ['txt001', 'srv'];

  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    this.flightType = this.mockService.getMockRoundTrip();
    this.flightClass = this.mockService.getMockFlightClass();
    this.passengers = this.mockService.getMockPassengers();
    this.bags = this.mockService.getMockBags();
  }
}
