import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {
    constructor(private _http: Http) {}
    
    getPeople() {
        //return this._http.get("http://jsonplaceholder.typicode.com/users").map( (response: Response) => response.json());
        let rr = this._http.get('dev/data/people.json').map( (res: Response) => res.json());
        console.log("Data from json: ", rr);
        return rr;
    }
    
}