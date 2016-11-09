import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Observable} from 'rxjs';
import {FeathersService} from './feathers.service';

@Component({
    selector: "app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {

    private _messagesService: any;
    private _messages: Observable<any>;

    constructor(private FeathersService: FeathersService,
                private _ref: ChangeDetectorRef) {
        this._messagesService = this.FeathersService.service('messages');
    }

    ngOnInit(): void {
        this._messagesService.find()
            .subscribe(resp => {
                this._messages = resp.data;
                this._ref.detectChanges();
            });
    }
}
