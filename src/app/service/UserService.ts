import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";


@Injectable()
export class UserService {
    constructor(private http: HttpClient) {
    }

    getUserList() {
        let headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');

        return this.http.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8', { headers }); 
    }
}