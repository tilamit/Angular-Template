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
  vBloodGroupID_2: any = "";
  ngOnInit() {
    this.GetDeptList();
    this.GetSectionList();
    this, this.GetShiftList();
    this.GetDesignationList();
    this.LoadEmpData();
    this.vBloodGroupID_2 = "BGI-2";
  }

  objTempEmp: EmployeeInformation;
  objTempEmpAddress: EmployeeInformation;
  angForm: FormGroup;

  //EMP_PERSONAL - STARTS
  /*vEmployeeManualID: string;
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
  Ref2: string;*/
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
  public shifts: any;

  public employees: [];

  seletedValueDept = '0';
  seletedValueSection = '0';
  seletedValueSectionMng = '0';
  seletedValueDesc = '0';
  seletedValueShift = '0';
  seletedValueEmpStatus = '0';
  seletedValueEmpType = '0';
  seletedValuePayType = '0';
  seletedValueBank = '0';
  seletedValueLeave = '0';
  seletedValueOff = '0';

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

  GetShiftList() {
    debugger;
    this.dataservice.GetShiftList().subscribe(result => {
      this.shifts = JSON.parse(result);


      console.log(this.shifts);
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


  //Get all employee
  keyword = 'EMPNO';
  LoadEmpData() {
    debugger;
    this.dataservice.GetAllEmp().subscribe(result => {
      this.employees = JSON.parse(result);

      console.log(this.employees);
    }, error => console.error(error));
  }

  //Test data
  //keyword = 'id';
  /*public employees = [
    {
      id: "Z0930",
      name: 'Amit',
    },
    {
      id: "Z0928",
      name: 'Javed',
    },
    {
      id: "M1512",
      name: 'Chandan',
    },
    {
      id: "Z1014",
      name: 'Saleh',
    },
  ];*/

  /*EMP_PERSONAL - Starts*/
  get vEmployeeManualID() { return this.angForm.get('vEmployeeManualID') };
  get vFirstName() { return this.angForm.get('vFirstName') };
  get vLastName() { return this.angForm.get('vLastName') };
  get vGenderID() { return this.angForm.get('vGenderID') };
  get dDateOfBirth() { return this.angForm.get('dDateOfBirth') };
  get vBloodGroupID() { return this.angForm.get('vBloodGroupID') };
  get vIdentificationMark() { return this.angForm.get('vIdentificationMark') };
  get Email() { return this.angForm.get('Email') };
  get Mobile() { return this.angForm.get('Mobile') };
  get NationalId() { return this.angForm.get('NationalId') };
  get PassportNo() { return this.angForm.get('PassportNo') };
  get PlaceOfIssue() { return this.angForm.get('PlaceOfIssue') };
  get ValidTill() { return this.angForm.get('ValidTill') };
  get Ref1() { return this.angForm.get('Ref1') };
  get Ref2() { return this.angForm.get('Ref2') };
  get vMaritalStatusID() { return this.angForm.get('vMaritalStatusID') };
  get vNationalityID() { return this.angForm.get('vNationalityID') };
  get vReligionID() { return this.angForm.get('vReligionID') };
  /*EMP_PERSONAL - Ends*/

  /*EMP_OFFICIAL - Starts*/
  get vCompanyDivisionName() { return this.angForm.get('vCompanyDivisionName') };
  get vDepartmentName() { return this.angForm.get('vDepartmentName') };
  get vSectionName() { return this.angForm.get('vSectionName') };
  get ManagementSectionName() { return this.angForm.get('ManagementSectionName') };
  get vDesignationName() { return this.angForm.get('vDesignationName') };
  get vEmployeeTypeID() { return this.angForm.get('vEmployeeTypeID') };
  get EMP_Status() { return this.angForm.get('EMP_Status') };
  get PayType() { return this.angForm.get('PayType') };
  get Bank() { return this.angForm.get('Bank') };
  get AccNo() { return this.angForm.get('AccNo') };
  get Tin() { return this.angForm.get('Tin') };
  get ResignDate() { return this.angForm.get('ResignDate') };
  get ResingReason() { return this.angForm.get('ResingReason') };
  get vShiftID() { return this.angForm.get('vShiftID') };
  get WeeklyOffDayID() { return this.angForm.get('WeeklyOffDayID') };
  get LeaveCategory() { return this.angForm.get('LeaveCategory') };
  get OTAllowed() { return this.angForm.get('OTAllowed') };
  get TransportAllowed() { return this.angForm.get('TransportAllowed') };
  get Residance() { return this.angForm.get('Residance') };
  get Tax() { return this.angForm.get('Tax') };
  get Pf() { return this.angForm.get('Pf') };
  get dApplicationDate() { return this.angForm.get('dApplicationDate') };
  get dInterviewDate() { return this.angForm.get('dInterviewDate') };
  get dJoiningDate() { return this.angForm.get('dJoiningDate') };
  get dConfirmDate() { return this.angForm.get('dConfirmDate') };
  /*EMP_OFFICIAL - Ends*/

   /*EMP_LOCATION - Starts*/
   get PAddress() { return this.angForm.get('PAddress') };
   get PVillage() { return this.angForm.get('PVillage') };
   get PPo() { return this.angForm.get('PPo') };
   get PPs() { return this.angForm.get('PPs') };
   get PCity() { return this.angForm.get('PCity') };
   get PDistrict() { return this.angForm.get('PDistrict') };
   get PPin() { return this.angForm.get('PPin') };
   get PPhone() { return this.angForm.get('PPhone') };
   get PFax() { return this.angForm.get('PFax') };
   get PContact() { return this.angForm.get('PContact') };

   get PrAddress() { return this.angForm.get('PrAddress') };
   get PrVillage() { return this.angForm.get('PrVillage') };
   get PrPo() { return this.angForm.get('PrPo') };
   get PrPs() { return this.angForm.get('PrPs') };
   get PrCity() { return this.angForm.get('PrCity') };
   get PrDistrict() { return this.angForm.get('PrDistrict') };
   get PrPin() { return this.angForm.get('PrPin') };
   get PrPhone() { return this.angForm.get('PrPhone') };
   get PrFax() { return this.angForm.get('PrFax') };
   get PrContact() { return this.angForm.get('PrContact') };
   /*EMP_LOCATION - Ends*/

  selectEvent(item) {
    alert('Id: ' + item.EMPNO + ' Name: ' + item.ENAME);

    debugger;

    this.dataservice.GetIndiEmpDetails(item.EMPNO).subscribe(result => {
      this.objTempEmp = JSON.parse(result);

      console.log(this.objTempEmp);

      /*EMP_PERSONAL - Starts*/
      this.vEmployeeManualID.setValue(this.objTempEmp[0].VEMPLOYEEMANUALID);
      this.vFirstName.setValue(this.objTempEmp[0].VFIRSTNAME);
      this.vLastName.setValue(this.objTempEmp[0].VLASTNAME);
      this.vGenderID.setValue(this.objTempEmp[0].VGENDERID);
      this.vBloodGroupID.setValue(this.objTempEmp[0].VBLOODGROUPID);
      this.dDateOfBirth.setValue(this.datePipe.transform(this.objTempEmp[0].DDATEOFBIRTH, 'MM/dd/yyyy'));
      this.vBloodGroupID.setValue(this.objTempEmp[0].VBLOODGROUPID);
      this.vIdentificationMark.setValue(this.objTempEmp[0].VIDENTIFICATIONMARK);
      this.Email.setValue(this.objTempEmp[0].EMAIL);
      this.Mobile.setValue(this.objTempEmp[0].MOBILE);
      this.NationalId.setValue(this.objTempEmp[0].NATIONALID);
      this.PassportNo.setValue(this.objTempEmp[0].PASSPORTNO);
      this.PlaceOfIssue.setValue(this.objTempEmp[0].PLACEOFISSUE);
      this.ValidTill.setValue(this.datePipe.transform(this.objTempEmp[0].VALIDTILL, 'MM/dd/yyyy'));
      this.Ref1.setValue(this.objTempEmp[0].REF1);
      this.Ref2.setValue(this.objTempEmp[0].REF2);
      this.vMaritalStatusID.setValue(this.objTempEmp[0].VMARITALSTATUSID);
      this.vNationalityID.setValue(this.objTempEmp[0].VNATIONALITYID);
      this.EMP_Status.setValue(this.objTempEmp[0].EMP_STATUS);
      this.Email.setValue(this.objTempEmp[0].EMAIL);
      this.vReligionID.setValue(this.objTempEmp[0].VRELIGIONID);
      this.NationalId.setValue(this.objTempEmp[0].NATIONAL_ID);
      /*EMP_PERSONAL - Ends*/

      /*EMP_OFFICIAL - Starts*/
      this.vCompanyDivisionName.setValue(this.objTempEmp[0].VCOMPANYDIVISIONNAME);
      this.seletedValueDept = (this.objTempEmp[0].VDEPARTMENTNAME);
      this.seletedValueSection = (this.objTempEmp[0].VSECTIONNAME);
      this.seletedValueSectionMng = (this.objTempEmp[0].VSECTIONNAME);
      this.seletedValueDesc = (this.objTempEmp[0].VDESIGNATIONNAME);
      this.seletedValueEmpType = (this.objTempEmp[0].VEMPLOYEETYPEID);
      this.seletedValueEmpStatus = (this.objTempEmp[0].EMP_STATUS);
      this.seletedValuePayType = (this.objTempEmp[0].PAYTYPE);
      this.seletedValueBank = (this.objTempEmp[0].BANK);
      this.seletedValueShift = (this.objTempEmp[0].VSHIFTID);
      this.seletedValueOff = (this.objTempEmp[0].WEEKLYOFFDAYID);
      this.seletedValueLeave = (this.objTempEmp[0].LEAVECATEGORY);
      this.AccNo.setValue(this.objTempEmp[0].ACCNO);
      this.Tin.setValue(this.objTempEmp[0].TIN);
      this.ResignDate.setValue(this.datePipe.transform(this.objTempEmp[0].RESIGNDATE, 'MM/dd/yyyy'));
      this.ResingReason.setValue(this.objTempEmp[0].RESINGREASON);
      this.vShiftID.setValue(this.objTempEmp[0].VSHIFTID);
      this.WeeklyOffDayID.setValue(this.objTempEmp[0].WEEKLYOFFDAYID);
      this.LeaveCategory.setValue(this.objTempEmp[0].LEAVECATEGORY);

      if (this.objTempEmp[0].OTALLOWED == "Y") {
        this.OTAllowed.setValue(true);
      } else {
        this.OTAllowed.setValue(false);
      }

      if (this.objTempEmp[0].TRANSPORTALLOWED == "Y") {
        this.TransportAllowed.setValue(true);
      } else {
        this.TransportAllowed.setValue(false);
      }

      if (this.objTempEmp[0].RESIDANCE == "Y") {
        this.Residance.setValue(true);
      } else {
        this.Residance.setValue(false);
      }

      if (this.objTempEmp[0].TAX == "Y") {
        this.Tax.setValue(true);
      } else {
        this.Tax.setValue(false);
      }

      if (this.objTempEmp[0].PF == "Y") {
        this.Pf.setValue(true);
      } else {
        this.Pf.setValue(false);
      }

      this.dApplicationDate.setValue(this.datePipe.transform(this.objTempEmp[0].DAPPLICATIONDATE, 'MM/dd/yyyy'));
      this.dInterviewDate.setValue(this.datePipe.transform(this.objTempEmp[0].DINTERVIEWDATE, 'MM/dd/yyyy'));
      this.dJoiningDate.setValue(this.datePipe.transform(this.objTempEmp[0].DJOININGDATE, 'MM/dd/yyyy'));
      this.dConfirmDate.setValue(this.datePipe.transform(this.objTempEmp[0].DCONFIRMDATE, 'MM/dd/yyyy'));
      /*EMP_OFFICIAL - Ends*/
    }, error => console.error(error));

    this.dataservice.GetIndiEmpAddress(item.EMPNO).subscribe(result => {
      this.objTempEmpAddress = JSON.parse(result);

      /*EMP_LOCATION - Starts*/
      /*this.PAddress.setValue(this.objTempEmpAddress[0].PADDRESS);
      this.PVillage.setValue(this.objTempEmpAddress[0].PVILLAGE);
      this.PPo.setValue(this.objTempEmpAddress[0].PPO);
      this.PPs.setValue(this.objTempEmpAddress[0].PPS);
      this.PCity.setValue(this.objTempEmpAddress[0].PCITY);
      this.PDistrict.setValue(this.objTempEmpAddress[0].PDISTRICT);
      this.PPin.setValue(this.objTempEmpAddress[0].PPIN);
      this.PPhone.setValue(this.objTempEmpAddress[0].PPHONE);
      this.PFax.setValue(this.objTempEmpAddress[0].PFAX);
      this.PContact.setValue(this.objTempEmpAddress[0].PCONTACT);

      this.PrAddress.setValue(this.objTempEmpAddress[0].PRADDRESS);
      this.PrVillage.setValue(this.objTempEmpAddress[0].PRVILLAGE);
      this.PrPo.setValue(this.objTempEmpAddress[0].PRPO);
      this.PrPs.setValue(this.objTempEmpAddress[0].PRPS);
      this.PrCity.setValue(this.objTempEmpAddress[0].PRCITY);
      this.PrDistrict.setValue(this.objTempEmpAddress[0].PRDISTRICT);
      this.PrPin.setValue(this.objTempEmpAddress[0].PRPIN);
      this.PrPhone.setValue(this.objTempEmpAddress[0].PRPHONE);
      this.PrFax.setValue(this.objTempEmpAddress[0].PRFAX);
      this.PrContact.setValue(this.objTempEmpAddress[0].PRCONTACT);*/
      /*EMP_LOCATION - Ends*/

      console.log(this.objTempEmpAddress);

    }, error => console.error(error));

  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }
}
