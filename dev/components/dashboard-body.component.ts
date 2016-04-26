import {Component, OnInit} from 'angular2/core';

@Component({
    selector : 'dashboard-body',
    template : `
        <md-card flex="100">
            <md-card-header>
                <md-card-header-text>
                    <span class="md-title">What's Going On</span>
                </md-card-header-text>
            </md-card-header>
            <md-card-content>
                <div layout="row" style="height:80px;" layout-align="start end">
                    <div flex="33">Test</div>
                    <div flex="66">Test2</div>
                </div>
            </md-card-content>
        </md-card>
    `,
    providers : [],
    styleUrls : ['../assets/scss/md-whiteframe.scss']
    
})

export class DashboardBodyComponent {
    errorMessage : string;
    message : string;
    
    getWeather(){
        
    }
    
    assignValue(data : any){
        
    }
    
    reportError(errorMessage : string){
        
    }
} 