import {Component} from '@angular/core';
import {FormBuilder} from '@angular/common';
import {Person} from './models/person';

@Component({
    selector: 'my-form',
    template: `
        <section>
            <h2>Form demo</h2>
            <div class="form">
                <form >
                    <label for="name">Name</label>
                    <input type="text" id="name">
                    <label for="surname">Surname</label>
                    <input type="text" id="surname">
                    <label for="age">Age</label>
                    <input type="text" id="age" maxlength="3">
                    <label for="country">Country</label>
                    <input type="text" id="country">
                </form>
            </div>
            <div class="output">
                <p>Output: {{}}</p>
            </div>
        </section>
    `
})
export class MyFormComponent {
    
    constructor(private f: FormBuilder) {
        
    }
}