import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EmployeeInformation } from 'src/app/apps/Models/EmployeeInformation';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

export class TabsComponent implements OnInit {
  objTempEmp: EmployeeInformation;
  angForm: FormGroup;

  vEmployeeManualID: string;
  vFirstName: string;
  vLastName: string;
  vMaritalStatusID: string;
  vGenderID: string;
  dDateOfBirth: string;
  vNationalityID: string;
  EMP_Status: string;
  vBloodGroupID: string;
  vIdentificationMark: string;
  vReligionID: string;
  Mail: string;
  Mobile: string;
  NationalId: string;
  PassportNo: string;
  PlaceOfIssue: string;
  ValidTill: string;
  Ref1: string;
  Ref2: string;

  ngOnInit() {
 
  }

  constructor(private fb: FormBuilder) {
    this.angForm = this.fb.group({
      empId: ['', Validators.required ],
      empName: ['', Validators.required ]
    });
  }

    //Save employee details
    AddEmployee(addForm: NgForm) {
      debugger;
  
      this.objTempEmp = new EmployeeInformation();
      this.objTempEmp.vEmployeeManualID = this.vEmployeeManualID;
      this.objTempEmp.vFirstName = this.vFirstName;
      this.objTempEmp.vLastName = this.vLastName;
      this.objTempEmp.vMaritalStatusID = this.vMaritalStatusID;
      this.objTempEmp.vGenderID = this.vGenderID;
      this.objTempEmp.dDateOfBirth = this.dDateOfBirth;
      this.objTempEmp.vNationalityID = this.vNationalityID;
      this.objTempEmp.EMP_Status = this.EMP_Status;
      this.objTempEmp.vBloodGroupID = this.vBloodGroupID;
      this.objTempEmp.vIdentificationMark = this.vIdentificationMark;
      this.objTempEmp.vReligionID = this.vReligionID;
      this.objTempEmp.Mail = this.Mail;
      this.objTempEmp.Mobile = this.Mobile;
      this.objTempEmp.NationalId = this.NationalId;
      this.objTempEmp.PassportNo = this.PassportNo;
      this.objTempEmp.PlaceOfIssue = this.PlaceOfIssue;
      this.objTempEmp.ValidTill = this.ValidTill;
      this.objTempEmp.Ref1 = this.Ref1;
      this.objTempEmp.Ref2 = this.Ref2;
    }
}




































 //Import ViewChild
//  @ViewChild('addEmp', {static: false}) addEmp: NgForm;
//  angForm: FormGroup;

//   ngOnInit() {
  
//   }

//   constructor(private fb: FormBuilder) {
//     this.angForm = this.fb.group({
//       empId: ['', Validators.required ],
//       empName: ['', Validators.required ]
//     });
//   }

//   createForm() { 
   
//   }

//     //Save employee details
//     AddEmployee(regForm: NgForm) {
//       debugger;      
//     }
