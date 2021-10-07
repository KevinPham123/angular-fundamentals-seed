import { Component, OnInit } from "@angular/core";

import { Passenger} from '../../models/passenger.interface';


@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <passenger-count
                [items] = "passengers">

            </passenger-count>

            <passenger-detail
                *ngFor = "let passenger of passengers;"
                [detail]="passenger">
            </passenger-detail>

        
        </div>
    
    `

})

export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];
      constructor() {}
      ngOnInit(){
          console.log('ngOnInit');
          this.passengers =  [{
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
}