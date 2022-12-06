import {UrlConfig} from '../../utility/url.config';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ApiserviceService} from '../../services/apiservice.service';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-create-service-type',
  templateUrl: './create-service-type.component.html',
  styleUrls: ['./create-service-type.component.scss']
})
export class CreateServiceTypeComponent implements OnInit {
  public serviceCategory: any = [];
  private urlConfig: UrlConfig | any;
  serviceTypesForm: FormGroup | any;
  documentForm: FormGroup | any;
  submitted = false;
  button = false;
  public document: any = [];
  selectedDocument: any = [];
  searchText: any;
  @ViewChild('closeDocument') closeDocument: ElementRef | any;


  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe, private apiService: ApiserviceService, private toastr: ToastrService,
              private router: Router, private route: ActivatedRoute ) {
    this.urlConfig = new UrlConfig();
    this.serviceTypesForm = this.formBuilder.group({
      serviceTypeId: [null, []],
      serviceCategoryId: [''],
      serviceCost: [''],
      GstPercentage: [''],
      serviceTypeName: [''],

      documentIdsList: [this.selectedDocument]
    });
    this.documentForm = this.formBuilder.group({
      documentName: ['']
    });

  }

  ngOnInit(): void {
    this.getServiceCategory();
    this.getTypeById();
    this.getAllDocument();
  }

  // tslint:disable-next-line:typedef
  getServiceCategory() {
    const url: string = this.urlConfig.getAllServiceCategories;
    this.apiService.action(url, 'GET').subscribe( response => {
      this.serviceCategory = response.data.allServiceCategoriesData;
    });
  }

  // tslint:disable-next-line:typedef
  get f() {
    return this.serviceTypesForm.controls;
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    if (this.serviceTypesForm.invalid) {
      return;
    }
    const body = this.serviceTypesForm.value;
    if (this.button) {
      const url = this.urlConfig.updateServiceType;
      this.apiService.action(url, 'PUT', body).subscribe(
        (response) => {
          // this.alertService.success(response.message);
          this.toastr.success(response.message, 'Success!');
          this.router.navigate(['/servicetype']);
        });
    } else {
      console.log(body);
      const url: string = this.urlConfig.addNewServiceType;
      this.apiService.action(url, 'POST', body).subscribe( response => {
        // this.alertService.success('Service Type Create Successfully');
        this.toastr.success(response.message, 'Success!');
        this.router.navigate(['/servicetype']);
      });
    }
  }

  // tslint:disable-next-line:typedef
  getTypeById() {
    const serviceTypeId = this.route.snapshot.params.serviceTypeId;
    if (serviceTypeId) {
      this.button = true;
      const url: any = this.urlConfig.getServiceTypeById + '/' + serviceTypeId;
      this.apiService.action(url, 'GET').subscribe(
        (response) => {
          this.button = true;
          this.serviceTypesForm.patchValue(response.data.serviceTypeData);
        }
      );
    } else {
      this.button = false;
    }
  }

  // tslint:disable-next-line:typedef
  getAllDocument() {
    const url = this.urlConfig.getAllMasterDocuments;
    this.apiService.action(url, 'GET').subscribe(
      (response) => {
        this.document = response.data;
      });
  }

  // tslint:disable-next-line:typedef
  addDocument() {
    const body = this.documentForm.value;
    const url: string = this.urlConfig.addNewMasterDocument;
    this.apiService.action(url, 'POST', body).subscribe(
      response => {
        this.getAllDocument();
        this.closeDocument.nativeElement.click();
      });
  }

  // tslint:disable-next-line:typedef
  documentChange(event: any) {
    const index = this.selectedDocument.indexOf(event.target.value);
    // tslint:disable-next-line:triple-equals
    if (index == -1) {
      this.selectedDocument.push({documentId: event.target.value});
    } else {
      this.selectedDocument.splice(index, 1);
    }
  }




}
