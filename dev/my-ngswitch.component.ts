import {Component} from '@angular/core';

@Component({
    selector: 'my-ngswitch',
    template: `
        <section>
            <h2>*ngSwitch</h2>
            <label>Insert a value:</label>
            <input type="text" #text (keyup)='0'>
            <div [ngSwitch]="text.value">
                <div *ngSwitchWhen="'1'">
                    <p>Number 1</p>
                </div>
                <div *ngSwitchWhen="'2'">
                    <p>Two is better than one</p>
                </div>
                <div *ngSwitchWhen="'3'">
                    <p>Three is not tree</p>
                </div>
                <div *ngSwitchDefault>
                    <p>Nothing...</p>
                </div>
            </div>
        </section>
    `
})
export class MyNgSwitchComponent {
    
}