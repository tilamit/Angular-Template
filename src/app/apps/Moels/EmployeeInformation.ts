
export class EmployeeInformation {
  // #region <Employee Personal and Official> 
  EMP_Status: string;
  EmployeeAutoID: string;
  vEmployeeManualID: string;
  vTitleID: string;
  vFirstName: string;
  vMiddleName: string;
  vLastName: string;
  vFullNameInBengali: string;
  vGenderID: string;
  vMaritalStatusID: string;
  dDateOfBirth: string;
  vAgeAtJoining: string;
  vIdentificationMark: string;
  vBloodGroupID: string;
  vReligionID: string;
  vNationalityID: string;
  vCompanyDivisionID: string;
  vCompanyDivisiionName: string;
  vDepartmentID: string;
  vDepartmentName: string;
  vSectionID: string;
  vSectionName: string;
  vDesignationID: string;
  vDesignationName: string;
  vEmployeeTypeID: string;
  vEmploymentTypeID: string;
  vGradeID: string;
  vShiftID: string;
  vCompanyEmailID: string;
  dJoiningDate: Date;
  dConfirmDate: Date;
  dApplicationDate: Date;
  dInterviewDate: Date;
  bProvitionPeriod: boolean;
  bIncludeInAttendance: boolean;
  vEmployeeCardNo: string;
  bIncludeInPayroll: boolean;
  bOT: boolean;
  bEmployeeStatus: boolean;
  vEmployeeStatusInfoID: string;
  vLeaveProfile: string;
  FingerPrintID: string;
  WeeklyOffDayID: string;
  InsertUpdateDelete: string;
  InputUser: string;
  Location: string;
  UserNAme: string;

  ActiveStatus: string;
  PassportNo: string;
  PlaceOfIssue: string;
  ValidTill: string;
  Ref1: string;
  Ref2: string;

  LeaveCategory: string;
  OTAllowed: boolean;
  TransportAllowed: boolean;
  Residance: boolean;
  Tax: boolean;
  Pf: boolean;

  PayType: string;
  Bank: string;
  BankID: string;
  AccNo: string;
  Tin: string;

  ManageSectionID: string;
  ManagementSectionName: string;

  ReleaseDate: Date;
  ResignDate: Date;
  ResingReason: string;
  FingerPrintPrinting: string;

  Com_ID: string;

  Mobile: string;
  Mail: string;
  NationalId: string;
  EntryDate: string;
  // #endregion 

  // #region <Employee Address> 
  PAddress: string;
  PVillage: string;
  PPo: string;
  PPs: string;
  PCity: string;
  PDistrict: string;
  PPin: string;
  PPhone: string;
  PFax: string;
  PContact: string;

  PrAddress: string;
  PrVillage: string;
  PrPo: string;
  PrPs: string;
  PrCity: string;
  PrDistrict: string;
  PrPin: string;
  PrPhone: string;
  PrFax: string;
  PrContact: string;
  // #endregion 

  // #region <Employee Education> 
  InstituteName: string;
  PassedExam: string;
  Division: string;
  Year: string;
  Marks: string;
  Board: string;
  Subject: string;
  Country: string;
  // #endregion 

  // #region <Employee Short Course>
  CCourseName: string;
  CConductedBy: string;
  CFrom: Date;
  CTo: Date;
  CCertificate: string;
  // #endregion 

  // #region <Employee Training>
  TCourseName: string;
  TConductedBy: string;
  TFrom: Date;
  TTo: Date;
  TCertificate: string;
  TSkill: string;
  // #endregion

  // #region <Employee Experience>
  EOrganization: string;
  EAddress: string;
  EPhone: string;
  EDesignation: string;
  EFrom: Date;
  ETo: Date;
  ELeaveReason: string;
  ELastSalaryDrawn: string;
  // #endregion

  // #region <Employee Family>
  DNoOfDependance: number;
  DNameofDependance: string;
  DRelationShip: string;
  DDateOfBirth: string;
  DAge: string;
  DGender: string;
   // #endregion

   // #region <Employee Picture>
   PIC_EMP: string;
   // #endregion
}

