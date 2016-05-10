import {Component} from '@angular/core';

@Component({
    selector: 'my-ng-for',
    template: `
        <section>
            <h2>*ngFor</h2>
            <ul>
                <li *ngFor="let item of elements">{{item}}</li>
            </ul>
        </section>
    `
})
export class MyNgForComponent {
    elements: string[];
    
    constructor() {
        this.elements = ['Cat', 'Dog', 'Horse', 'Bird', 'Mouse']
    }
}