import {Component} from '@angular/core';
import {MyNgIfComponent} from './my-ng-if.component';
import {MyNgSwitchComponent} from './my-ngswitch.component';
import {MyNgForComponent} from './my-ngfor.component';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <ul>
                <li>
                    <a href="#">Built in Directives</a>
                </li>
                <li>
                    <a href="#">Other</a>
                </li>
            </ul>
        </header>
        <h1>Let's play with Angular 2 RC1!</h1>
        <h2>Build in directives</h2>
        <my-ngif></my-ngif>
        <hr>
        <my-ngswitch></my-ngswitch>
        <hr>
        <my-ng-for></my-ng-for>
        <hr>
    `,
    directives: [MyNgIfComponent, MyNgSwitchComponent, MyNgForComponent]
})
export class AppComponent {
    
}
