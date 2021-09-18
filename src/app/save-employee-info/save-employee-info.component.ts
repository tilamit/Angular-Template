import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EmployeeInformation } from 'src/app/apps/Models/EmployeeInformation';
import { UserService } from '../service/UserService';
import { EmpInfo } from '../apps/Models/EmpInfo';

@Component({
  selector: 'app-save-employee-info',
  templateUrl: './save-employee-info.component.html',
  styleUrls: ['./save-employee-info.component.scss']
})
export class SaveEmployeeInfoComponent implements OnInit {

  constructor(private fb: FormBuilder, private dataservice: UserService, private datePipe: DatePipe) {
    this.validateForm();
  }

  ngOnInit() {
    this.GetDeptList();
    this.GetSectionList();
    this.GetDesignationList();
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

  public val1: EmployeeInformation[];
  public val2: EmployeeInformation[];
  public val3: EmployeeInformation[];
  public val4: EmployeeInformation[];
  public val5: EmployeeInformation[];

  public rows: EmployeeInformation[] = [];
  public rowsCourses: EmployeeInformation[] = [];
  public rowsTrainings: EmployeeInformation[] = [];
  public rowsExperiences: EmployeeInformation[] = [];
  public rowsFamilies: EmployeeInformation[] = [];

  public EmpInfo: EmpInfo;
  public dept: any;
  public section: any;
  public sectionMng: any;
  public designation: any;

  seletedValueDept = '0';
  seletedValueSection = '0';
  seletedValueSectionMng = '0';
  seletedValueDesc = '0';

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

      OTAllowed: [''],
      TransportAllowed: [''],
      Residance: [''],
      Tax: [''],
      Pf: [''],

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

  GetDeptList() {
    debugger;
    this.dataservice.GetDeptList().subscribe(result => {
      this.dept = JSON.parse(result);


      console.log(this.dept);
    }, error => console.error(error));
  }

  GetSectionList() {
    debugger;
    this.dataservice.GetSectionList().subscribe(result => {
      this.section = JSON.parse(result);
      this.sectionMng = JSON.parse(result);


      console.log(this.section);
    }, error => console.error(error));
  }

  GetDesignationList() {
    debugger;
    this.dataservice.GetDesignationList().subscribe(result => {
      this.designation = JSON.parse(result);


      console.log(this.designation);
    }, error => console.error(error));
  }

  //Validate on button click
  buttonClicked() {
    //this.validateForm();
    if ((this.angForm.controls['vEmployeeManualID'].value == "") || (this.angForm.controls['vFirstName'].value == "") || (this.angForm.controls['vLastName'].value == "") || (this.angForm.controls['dDateOfBirth'].value == "")) {
      alert("Please! Fill up all required fields.");
    } else {
      console.log(this.angForm.value);

      let obj = {} as EmpInfo;
      obj.BO = this.angForm.value;
      obj.lstEducation = this.rows;
      obj.ShortCourse = this.rowsCourses; 
      obj.Training = this.rowsTrainings;
      obj.Experience = this.rowsExperiences;
      obj.Family = this.rowsFamilies;

      this.dataservice.AddEmployee(obj).subscribe(res => {
        alert("Employee info added successfully!");
      })
    }
  }

  //Add subjects
  addSubjects() {
    let obj = {} as EmployeeInformation;

    obj.InstituteName = this.InstituteName;
    obj.PassedExam = this.PassedExam;
    obj.Division = this.Division;
    obj.Year = this.Year;
    obj.Marks = this.Marks;
    obj.Board = this.Board;
    obj.Subject = this.Subject;

    this.rows.push(obj);
  }

  deleteRowEducation(id) {
    this.rows.splice(id);
  }

  addShortCourses() {
    let obj = {} as EmployeeInformation;

    obj.CCourseName = this.CCourseName;
    obj.CConductedBy = this.CConductedBy;
    obj.CFrom = new Date(this.CFrom)
    obj.CTo = new Date(this.CTo);
    obj.CCertificate = this.CCertificate;

    this.rowsCourses.push(obj);
    //this.rowsCourses.push({ CCourseName: this.CCourseName, CConductedBy: this.CConductedBy, CFrom: this.CFrom, CTo: this.CTo, CCertificate: this.CCertificate });
  }

  deleteRowCourse(id) {
    this.rowsCourses.splice(id);
  }

  addTrainings() {
    let obj = {} as EmployeeInformation;

    obj.TCourseName = this.TCourseName;
    obj.TConductedBy = this.TConductedBy;
    obj.TFrom = new Date(this.TFrom);
    obj.TTo = new Date(this.TTo);
    obj.TCertificate = this.TCertificate;
    obj.TSkill = this.TSkill;

    this.rowsTrainings.push(obj);
    //this.rowsTrainings.push({ TCourseName: this.TCourseName, TConductedBy: this.TConductedBy, TFrom: this.TFrom, TTo: this.TTo, TCertificate: this.TCertificate, TSkill: this.TSkill });
  }

  deleteRowTraining(id) {
    this.rowsTrainings.splice(id);
  }

  addExperiences() {
    let obj = {} as EmployeeInformation;

    obj.EOrganization = this.EOrganization;
    obj.EAddress = this.EAddress;
    obj.EPhone = this.EPhone;
    obj.EDesignation = this.EDesignation;
    obj.EFrom = new Date(this.EFrom);
    obj.ETo = new Date(this.ETo);
    obj.ELeaveReason = this.ELeaveReason;
    obj.ELastSalaryDrawn = this.ELastSalaryDrawn;

    this.rowsExperiences.push(obj);
    //this.rowsExperiences.push({ EOrganization: this.EOrganization, EAddress: this.EAddress, EPhone: this.EPhone, EDesignation: this.EDesignation, EFrom: this.EFrom, ETo: this.ETo, ELeaveReason: this.ELeaveReason, ELastSalaryDrawn: this.ELastSalaryDrawn });
  }

  deleteRowExperience(id) {
    this.rowsExperiences.splice(id);
  }

  addFamilies() {
    let obj = {} as EmployeeInformation;

    obj.DNameofDependance = this.DNameofDependance;
    obj.DRelationShip = this.DRelationShip;
    obj.DDateOfBirth = new Date(this.dDateOfBirth2);
    obj.DAge = this.DAge;
    obj.DGender = this.DGender

    this.rowsFamilies.push(obj);
    //this.rowsFamilies.push({ DNameofDependance: this.DNameofDependance, DRelationShip: this.DRelationShip, dDateOfBirth2: this.dDateOfBirth2, DAge: this.DAge, DGender: this.DGender });
  }

  deleteRowFamily(id) {
    this.rowsFamilies.splice(id);
  }
}
