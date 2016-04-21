///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './components/app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MainConfiguration} from './main-configuration.config';
import {ROUTER_PROVIDERS} from 'angular2/router'; 
import {MATERIAL_PROVIDERS} from 'ng2-material/all';


bootstrap(AppComponent, [HTTP_PROVIDERS, MATERIAL_PROVIDERS, ROUTER_PROVIDERS, MainConfiguration]);