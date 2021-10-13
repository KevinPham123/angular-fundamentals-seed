import { Component } from "@angular/core";

@Component({
    selector: 'not-found',
    template: `
    <div>
        Not found!, <a routerlink="/">go home</a>?
    </div>
    `
})

export class NotFoundComponent{

}