// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {platformNativeScriptDynamic, NativeScriptModule} from 'nativescript-angular/platform';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FeathersService} from './feathers.service';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
    providers: [FeathersService]
})
class AppComponentModule {
}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
