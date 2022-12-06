export class UrlConfig{
   // User API
   public userLogin = 'user/userLogin';
   public registerNewUser = 'user/registerNewUser';

  // company API
  public getAllCompanies = 'company/getAllCompanies';
  public createCompany = 'company/createCompany';
  public getCompanyDataById = 'company/getCompanyInfo';
  public updateCompany = 'company/updateCompanyInfo';
  public deleteCompany = 'company/deleteCompany';

  // Branch API
  public getAllBranches = 'companyBranch/getAllBranches';
  public createNewBranch = 'companyBranch/createNewBranch';
  public updateCompanyBranchInfo = 'companyBranch/updateCompanyBranchInfo';
  public deleteCompanyBranch = 'companyBranch/deleteCompanyBranch';
  public getBranchDataById = 'companyBranch/getCompanyBranchInfo';

  // department API
  public addNewDepartment = 'department/addNewDepartment';
  public getAllDepartments = 'department/getAllDepartments';
  public getDepartmentDataById = 'department/getDepartmentInfo';
  public updateDepartment = 'department/updateDepartmentInfo';
  public deleteDepartment = 'department/deleteDepartment';

  // Staff API
  public getAllStaffList = 'staff/getAllStaffList';
  public getStaffInfoByStaffId = 'staff/getStaffInfoByStaffId';
  public updateStaffInfo = 'staff/updateStaffInfo';
  public deleteStaff = 'staff/deleteStaff';

  // User Api
  public getAllUserRoles = 'userRole/getAllUserRoles';
  public addNewStaff = 'staff/addNewStaff';

  // Client API
  public addNewClient = 'client/addNewClient';
  public getAllClients = 'client/getAllClients';
  public getClientDataById = 'client/getClientInfo';
  public updateClient = 'client/updateClientInfo';
  public deleteClient = 'client/deleteClient';

  // Service API
  public createService = 'service/createService';
  public getAllServices = 'service/getAllServices';
  public getServiceByServiceId = 'service/getServiceByServiceId';
  public updateServiceByServiceId = 'service/updateServiceByServiceId';
  public deleteServiceById = 'service/deleteServiceById';
  // Service Group API
  public addNewServiceGroup = 'serviceGroup/addNewServiceGroup';
  public getAllServiceGroups = 'serviceGroup/getAllServiceGroups';
  public getServiceGroupById = 'serviceGroup/getServiceGroupById';
  public updateServiceGroup = 'serviceGroup/updateServiceGroup';
  public deleteServiceGroup = 'serviceGroup/deleteServiceGroup';
  // Service Category API
  public getAllServiceCategories = 'serviceCategory/getAllServiceCategories';
  public addNewServiceCategory = 'serviceCategory/addNewServiceCategory';
  public getServiceCategoryById = 'serviceCategory/getServiceCategoryById';
  public updateServiceCategory = 'serviceCategory/updateServiceCategory';
  public deleteServiceCategory = 'serviceCategory/deleteServiceCategory';
  // Service Types API
  public getAllServiceTypes = 'serviceType/getAllServiceTypes';
  public addNewServiceType = 'serviceType/addNewServiceType';
  public getServiceTypeById = 'serviceType/getServiceTypeById';
  public updateServiceType = 'serviceType/updateServiceType';
  public deleteServiceType = 'serviceType/deleteServiceType';
  // Documents
  public getServiceTypeDocumentById = 'serviceTypeDocument/getServiceTypeDocumentById';
  //
  public getServiceCategoryByGroup = 'serviceCategory/getServiceCategoryByGroup';
  public getAllServiceTypesByCategory = 'serviceType/getAllServiceTypesByCategory';
  // Assign Page API
  public assignServiceToStaff = 'serviceAssignment/assignServiceToStaff';
  // document API
  public getAllMasterDocuments = 'documentMaster/getAllMasterDocuments';
  public addNewMasterDocument = 'documentMaster/addNewMasterDocument';
  public getMasterDocumentById = 'documentMaster/getMasterDocumentById';
  public updateMasterDocument = 'documentMaster/updateMasterDocument';
  public deleteMasterDocument = 'documentMaster/deleteMasterDocument';
  // Service No API
  public autoGenerateServiceNo = 'service/autoGenerateServiceNo';
  // Client Ledger API
  public getClientServices = 'serviceAssignment/getClientServices';
  // menu
  public getAllMenu = 'menu/getAllMenu';
  public getAllSubMenu = 'subMenu/getAllSubMenu';
  public GETALLUSERROLES = 'userRole/getAllUserRoles';
  public getAllSubMenuByMenu = 'subMenu/getAllSubMenuByMenu';
  // Role Api
  public addNewUserRole = 'userRole/addNewUserRole';
  public getUserRolesWithPermissions = 'userRole/getUserRolesWithPermissions';
}

