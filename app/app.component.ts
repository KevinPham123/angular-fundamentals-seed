import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number
}

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate?: number,
  children: Child[] | null
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class ="app">
    <h3> Airline Passengers </h3>
      <ul>
        <li *ngFor = "let passenger of passengers; let i = index;">
          <span 
            class = "status" 
            [class.checked-in] = "passenger.checkedIn"></span>
            {{ i }}: {{ passenger.fullname }}
            <p> {{ passenger | json}} </p>
              <div class = "date">
                Check in date: 
                {{ passenger.checkInDate ? (passenger.checkIndate| date: 'yMMMMd'): 'Not checked in' }}
              </div>

              <div class = "children">
                Children: {{ passenger.children?.length || 0 }}
              </div>

           
        </li>
      </ul>

    </div>
  `
})
export class AppComponent {

  passengers: Passenger[] = [{
    id:1,
    fullname: 'Stephn',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
  }, {
    id:2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children: [{ name: 'Ted', age: 12}, { name: 'Chloe', age: 7}]
  }, {
    id:3,
    fullname: 'Kyle',
    checkedIn: true,
    checkInDate: 101022249,
    children: null
  }, {
    id:4,
    fullname: 'Steve',
    checkedIn: true,
    checkInDate: 10102224,
    children: [{ name: 'Jessica', age: 1}]
  }, {
    id:5,
    fullname: 'Skye',
    checkedIn: false,
    checkInDate: null,
    children: null
  }];



  

}
