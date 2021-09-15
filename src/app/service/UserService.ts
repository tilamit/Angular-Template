import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { EmployeeInformation } from "../apps/Models/EmployeeInformation";
import { EmpInfo } from "../apps/Models/EmpInfo";


@Injectable()
export class UserService {
    Url: string;

    constructor(private http: HttpClient) {
    }

    getUserList() {
        let headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');

        return this.http.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8', { headers }); 
    }

  GetEmpRatio() {
    debugger;

    this.Url = 'http://localhost:53743/api/values/';
    var a = this.Url + 'GetEmpRatio';

    const headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.get<any>(a);
  }

  GetLastFour(): Observable<any> {
    debugger;

    this.Url = 'http://localhost:53743/api/values/';
    var a = this.Url + 'GetLastFour';

    const headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.get<any>(a);
  }

    //Add Leave
    AddEmployee(aEmpInfo: EmpInfo) {
      var body = { aEmpInfo }
  
      this.Url = 'http://localhost:53743/api/values/'; 
      var a = this.Url + 'AddEmployee';
      console.log(aEmpInfo);
 
      /*var body = {
        EmployeeID: aSetLeaveBO.EmployeeID, LeaveType: aSetLeaveBO.LeaveType, approved_day: aSetLeaveBO.approved_day, RESON: aSetLeaveBO.RESON, FromDate: aSetLeaveBO.FromDate, ToDate: aSetLeaveBO.ToDate, ApprovedBy: aSetLeaveBO.ApprovedBy
      }
      console.log("EMPNO: " + body.EmployeeID + " LEAVE_NAME: " + body.LeaveType + " APRV_DAYS: " + body.approved_day + " RESON: " + body.RESON + " LV_FROM: " + body.FromDate + " LV_TO: " + body.ToDate + " APPROVED_BY: " + body.ApprovedBy);*/
           
      return this.http.post<EmpInfo>(a, aEmpInfo); 
    }
}