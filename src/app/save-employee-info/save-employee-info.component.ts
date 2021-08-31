import { Component, ViewChild, OnInit  } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EmployeeInformation } from 'src/app/apps/Moels/EmployeeInformation';

@Component({
  selector: 'app-save-employee-info',
  templateUrl: './save-employee-info.component.html',
  styleUrls: ['./save-employee-info.component.scss']
})
export class SaveEmployeeInfoComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
 
  }

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

    //Save employee details
    AddEmployee(addEmp: NgForm) {
      this.createForm();

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

    createForm() {
      this.angForm = this.fb.group({
        empId: ['', Validators.required ],
        empFirstName: ['', Validators.required ],
        empLastName: ['', Validators.required ],
        empMaritalStatus: ['', Validators.required ],
        empGender: ['', Validators.required ],
        dtDob: ['', Validators.required ],
        empNationality: ['', Validators.required ],
        empEmpStatus: ['', Validators.required ],
        empEmpBlood: ['', Validators.required ],
        empEmpIdentity: ['', Validators.required ],
        empEmpReligion: ['', Validators.required ],
        empEmpEmail: ['', Validators.required ],
        empEmpMobile: ['', Validators.required ],
        empEmpNationalId: ['', Validators.required ],
        empEmpPassportNo: ['', Validators.required ],
        empEmpPlaceOfIssue: ['', Validators.required ],
        empEmpValidTill: ['', Validators.required ],
        empEmpRef1: ['', Validators.required ],
        empEmpRef2: ['', Validators.required ]
      });
    }
}