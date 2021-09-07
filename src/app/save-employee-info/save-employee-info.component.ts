import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EmployeeInformation } from 'src/app/apps/Models/EmployeeInformation';

@Component({
  selector: 'app-save-employee-info',
  templateUrl: './save-employee-info.component.html',
  styleUrls: ['./save-employee-info.component.scss']
})
export class SaveEmployeeInfoComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.validateForm();
  }

  ngOnInit() {

  }

  objTempEmp: EmployeeInformation;
  angForm: FormGroup;

  //EMP_PERSONAL - STARTS
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
  //EMP_PERSONAL - ENDS

  public InstituteName: string;
  public PassedExam: string;
  public Division: string;
  public Year: string;
  public Marks: string;
  public Board: string;
  public Subject: string;

  public CCourseName: string;
  public CConductedBy: string;
  public CFrom: string;
  public CTo: string;
  public CCertificate: string;

  public TCourseName: string;
  public TConductedBy: string;
  public TFrom: string;
  public TTo: string;
  public TCertificate: string;
  public TSkill: string;

  public EOrganization: string;
  public EAddress: string;
  public EPhone: string;
  public EDesignation: string;
  public EFrom: string;
  public ETo: string;
  public ELeaveReason: string;
  public ELastSalaryDrawn: string;

  public DNameofDependance: string;
  public DRelationShip: string;
  public dDateOfBirth2: string;
  public DAge: string;
  public DGender: string;

  public rows: Array<{ InstituteName: string, PassedExam: string, Division: string, Year: string, Marks: string, Board: string, Subject: string }> = [];
  public rowsCourses: Array<{ CCourseName: string, CConductedBy: string, CFrom: string, CTo: string, CCertificate: string }> = [];
  public rowsTrainings: Array<{ TCourseName: string, TConductedBy: string, TFrom: string, TTo: string, TCertificate: string, TSkill: string }> = [];
  public rowsExperiences: Array<{ EOrganization: string, EAddress: string, EPhone: string, EDesignation: string, EFrom: string, ETo: string, ELeaveReason: string, ELastSalaryDrawn: string }> = [];
  public rowsFamilies: Array<{ DNameofDependance: string, DRelationShip: string, dDateOfBirth2: string, DAge: string, DGender: string }> = [];

  //Save employee details
  AddEmployee(addEmp: NgForm) {

    if (this.angForm.valid) {

      /*this.objTempEmp = new EmployeeInformation();
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
      this.objTempEmp.Ref2 = this.Ref2;*/

    } else {
      Object.keys(this.angForm.controls).forEach(field => {
        const control = this.angForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

  validateForm() {
    this.angForm = this.fb.group({
      vEmployeeManualID: ['', Validators.required],
      vFirstName: ['', Validators.required],
      vLastName: ['', Validators.required],
      vMaritalStatusID: ['', Validators.required],
      vGenderID: ['', Validators.required],
      dDateOfBirth: ['', Validators.required],
      vNationalityID: ['', Validators.required],
      EMP_Status: ['', Validators.required],
      vBloodGroupID: ['', Validators.required],
      vIdentificationMark: ['', Validators.required],
      vReligionID: ['', Validators.required],
      Email: ['', Validators.required],
      Mobile: ['', Validators.required],
      NationalId: ['', Validators.required],
      PassportNo: ['', Validators.required],
      PlaceOfIssue: ['', Validators.required],
      ValidTill: ['', Validators.required],
      Ref1: ['', Validators.required],
      Ref2: ['', Validators.required],

      vCompanyDivisionName: [''],
      vDepartmentName: [''],
      vSectionName: [''],
      vEmployeeCardNo: [''],
      ManagementSectionName: [''],
      vDesignationName: [''],
      vEmployeeTypeID: [''],
      //EMP_Status: [''],
      PayType: [''],
      Bank: [''],
      AccNo: [''],
      Tin: [''],
      //
      ResignDate: [''],
      ResingReason: [''],
      vShiftID: [''],
      WeeklyOffDayID: [''],
      LeaveCategory: [''],
      dApplicationDate: [''],
      dInterviewDate: [''],
      dJoiningDate: [''],
      dConfirmDate: [''],

      PAddress: [''],
      PVillage: [''],
      PPo: [''],
      PPs: [''],
      PCity: [''],
      PDistrict: [''],
      PPhone: [''],
      PPin: [''],
      PFax: [''],
      PContact: [''],

      PrAddress: [''],
      PrVillage: [''],
      PrPo: [''],
      PrPs: [''],
      PrCity: [''],
      PrDistrict: [''],
      PrPhone: [''],
      PrPin: [''],
      PrFax: [''],
      PrContact: ['']
    });
  }

  //Validate on button click
  buttonClicked() {
    //this.validateForm();
    console.log(this.angForm.value);
    //alert("Button click worked and id is " + this.vEmployeeManualID);
  }

  //Add subjects
  addSubjects() {
    this.rows.push({ InstituteName: this.InstituteName, PassedExam: this.PassedExam, Division: this.Division, Year: this.Year, Marks: this.Marks, Board: this.Board, Subject: this.Subject });
  }

  addShortCourses() {
    this.rowsCourses.push({ CCourseName: this.CCourseName, CConductedBy: this.CConductedBy, CFrom: this.CFrom, CTo: this.CTo, CCertificate: this.CCertificate });
  }

  addTrainings() {
    this.rowsTrainings.push({ TCourseName: this.TCourseName, TConductedBy: this.TConductedBy, TFrom: this.TFrom, TTo: this.TTo, TCertificate: this.TCertificate, TSkill: this.TSkill });
  }

  addExperiences() {
    this.rowsExperiences.push({ EOrganization: this.EOrganization, EAddress: this.EAddress, EPhone: this.EPhone, EDesignation: this.EDesignation, EFrom: this.EFrom, ETo: this.ETo, ELeaveReason: this.ELeaveReason, ELastSalaryDrawn: this.ELastSalaryDrawn });
  }

  addFamilies() {
    this.rowsFamilies.push({ DNameofDependance: this.DNameofDependance, DRelationShip: this.DRelationShip, dDateOfBirth2: this.dDateOfBirth2, DAge: this.DAge, DGender: this.DGender });
  }
}
