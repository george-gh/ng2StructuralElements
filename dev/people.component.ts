import { Component, OnInit } from '@angular/core';
import {PersonService} from './person.service';
import {Person} from './models/person';
import {Http} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'my-people',
    templateUrl: `
        <section>
            <div class="container">
               <div *ngFor="let p of people">
                    {{p.name}}
               </div> 
            </div>
        </section>
    `
})
export class PeopleComponent implements OnInit {
    
    people: Person[];
    
    constructor(private personService: PersonService) { }

    ngOnInit() {
        console.log('OnInit method');
        this.personService.getPeople()
            .subscribe(data => this.people = data); 
     }

}