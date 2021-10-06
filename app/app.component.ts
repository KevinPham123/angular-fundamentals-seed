import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean 
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class ="app">
 

      <h3> Airline Passengers</h3>
      <ul>
        <li *ngFor = "let passenger of passengers; let i = index;">
        <span 
        class = "status"
        [class.checked-in]="passenger.checkedIn"></span>
        {{ i }}: {{ passenger.fullname }}

        </li>
      </ul>

      <h3> Airline Passengers</h3>
      <ul>
      <li *ngFor = "let passenger of passengers; let i = index;">
      <span 
      class = "status"
      [ngClass]="{
        'checked-in': passenger.checkedIn,
        'checked-out': !passenger.checkedIn
      }"></span>
      {{ i }}: {{ passenger.fullname }}

      </li>
    </ul>
    </div>
  `
})
export class AppComponent {

  passengers: Passenger[] = [{
    id:1,
    fullname: 'Stephn',
    checkedIn: true
  }, {
    id:2,
    fullname: 'Rose',
    checkedIn: false
  }, {
    id:3,
    fullname: 'Kyle',
    checkedIn: true
  }, {
    id:4,
    fullname: 'Steve',
    checkedIn: true
  }, {
    id:5,
    fullname: 'Skye',
    checkedIn: false
  }];



  

}
