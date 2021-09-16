import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BOLogin } from '../apps/Models/BOLogin';
import { LoginService } from '../service/LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  errorMessage: string;

  obj: BOLogin;
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dataservice: LoginService) { 
    this.validateForm();
  }

  ngOnInit() {
    this.dataservice.isLoggedIn();
  }

  validateForm() {
    this.angForm = this.fb.group({
      UserID: [''],
      Password: [''],
    });
  }

   //Save employee details
   AddEmployee(addEmp: NgForm) {

    if (this.angForm.valid) {

  
    } else {
      Object.keys(this.angForm.controls).forEach(field => {
        const control = this.angForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

  login() {
    debugger;
    this.obj = this.angForm.value;
    this.dataservice.Login(this.obj).subscribe(
      data => {
        debugger;
        if (data.Status == "Success") {
          this.router.navigate(['/dashboard']);
          this.errorMessage = data.Message;
          debugger;

          localStorage.setItem('currentUser', data.Message);
          localStorage.setItem('Token', data.Token);
        }
        else {
          this.errorMessage = data.Message;
        }
      },
      error => {
        this.errorMessage = error.message;
      });
  };
}
