import {Component} from "@angular/core";
import {Observable} from 'rxjs';
import {FeathersService} from './feathers.service';

@Component({
    selector: "app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    private _messagesService: any;
    private _messages: Observable<any>;

    constructor(private FeathersService: FeathersService) {
        this._messagesService = this.FeathersService.service('messages');
        this._messages = this._messagesService.find().map(resp => resp.data);
    }

    diocane() {
        console.log(this._messages);
    }
}
