import {Component} from '@angular/core';

@Component({
    selector: 'my-ngif',
    template: `
        <section>
            <h2>*ngIf</h2>
            <label>Insert the text <strong>show</strong> for see the hidden text:</label>
            <input type="text" #text (keyup)='0'>
            <div *ngIf="text.value === 'show'">
                <p>Right! You discovered the hidden text! Gosh!</p>
            </div>
        </section>
    `
})
export class MyNgIfComponent {
    
}