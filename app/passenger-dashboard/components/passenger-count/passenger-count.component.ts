import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-count',
    template: `
        <div>
            <h3>Airline Passegners</h3>
            <div>
                Total checked in: {{ checkedInCount()}} / {{ items?.length }}
            </div>
        </div>
    `
})

export class PassengerCountComponent {
    @Input()
    items: Passenger [];
    checkedInCount(): number{
        if(!this.items) return;
        return this.items.filter((passenger: Passenger ) =>{
            return passenger.checkedIn;
        }).length;
    }
}
