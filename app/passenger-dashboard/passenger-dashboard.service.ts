import { Passenger } from "./models/passenger.interface";

export class PassengerDashboardService {
    constructor() {}
    
    getPassengers(): Passenger[] {
        return [{
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