const feathers = require('feathers/client');
const socketio = require('feathers-socketio/client');
const hooks = require('feathers-hooks');
const rx = require('feathers-reactive');

import {Injectable} from '@angular/core';
import {SocketIO} from 'nativescript-socketio';
import * as RxJS from 'rxjs';

@Injectable()
export class FeathersService {

    private socket;
    private app;

    constructor() {
        this.socket = new SocketIO('http://localhost:3030', null);
        this.socket.connect();
        this.app = feathers()
            .configure(hooks())
            .configure(socketio(this.socket))
            .configure(rx(RxJS));
    }

    service(name: string) {
        return this.app.service(name);
    }
}
