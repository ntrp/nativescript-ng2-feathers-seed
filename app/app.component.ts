import { Component, OnInit, ChangeDetectorRef, Input, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { FeathersService } from './feathers.service';

@Component({
    selector: "app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {

    private _messagesService: any;
    @Input() private _messages: Observable<any>;

    constructor(private FeathersService: FeathersService,
        private _ref: ChangeDetectorRef,
        private _zone: NgZone) {
        this._messagesService = this.FeathersService.service('messages');
    }

    ngOnInit(): void {
        this._messagesService.find()
            .subscribe(resp => {
                this._zone.run(() => {
                    this._messages = resp;
                });
            });
    }

    create() {
        let text = 'Text' + Math.random().toString(36).substr(2, 5);
        this._messagesService.create({
            text: text
        });
    }

    remove(id: string) {
        this._messagesService.remove(id);
    }
}
