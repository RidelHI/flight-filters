import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  constructor() {}

  getMockRoundTrip() {
    return ['Round-trip', 'One-way', 'Multi-city', 'Trip Builder'];
  }

  getMockFlightClass() {
    return ['Economy', 'Premium Economy', 'Business', 'First', 'Multiple'];
  }

  getMockPassengers() {
    return [
      {
        icon: null,
        title: 'Adults',
        limit: '18-64',
        count: 1,
      },
      {
        icon: null,
        title: 'Seniors',
        limit: '65+',
        count: 0,
      },
      {
        icon: null,
        title: 'Youth',
        limit: '12-17',
        count: 0,
      },
      {
        icon: null,
        title: 'Child',
        limit: '2-11',
        count: 0,
      },
      {
        icon: null,
        title: 'Toddler in own seat',
        limit: 'under 2',
        count: 0,
      },
      {
        icon: null,
        title: 'Infant on lap',
        limit: 'under 2',
        count: 0,
      },
    ];
  }

  getMockBags() {
    return [
      {
        icon: 'pi-lock',
        title: 'Carry-on bag',
        limit: '',
        count: 0,
      },
      {
        icon: 'pi-briefcase',
        title: 'Checked bag',
        limit: '',
        count: 0,
      },
    ];
  }
}
