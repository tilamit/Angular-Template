import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { EmployeeInformation } from "../apps/Models/EmployeeInformation";
import { EmpInfo } from "../apps/Models/EmpInfo";
import { Router } from "@angular/router";
import { BOLogin } from "../apps/Models/BOLogin";


@Injectable()
export class LoginService {
    Url: string;

    constructor(private http: HttpClient, private router: Router) {
        this.Url = 'http://localhost:53743/api/values/';
    }

    isLoggedIn() {
        debugger;
        if (localStorage.getItem('currentUser') == null) {
            this.router.navigate(['./login']);
        } else {
            this.router.navigate(['/dashboard']);
        }
    }

    Login(bo: BOLogin) {
        debugger;

        var a = this.Url + 'UserLogin';
        return this.http.post<any>(this.Url + 'UserLogin', bo);
    }
}