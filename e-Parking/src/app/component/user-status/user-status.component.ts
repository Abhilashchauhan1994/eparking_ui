import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/MOdels/user-details';
import { ApiDataService } from 'src/app/Services/api-data.service';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss'],
})
export class UserStatusComponent implements OnInit {
  showcreatedialog = false;
  showeditdialog = false;
  createUserform: FormGroup;
  editUserform: FormGroup;
  userDetailsresponse: UserDetails[];
  userUpdateresponse: UserDetails[];
  deleteuserresponse: UserDetails[];
  responsemsg: any[];
  userId: number;
  term: string;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createUserform = this.fb.group({
      firstName: [''],
      lastName: [''],
      vehicleNumber: [''],
      phoneNumber: [''],
      vehicleCode: ['Select Your Vehicle'],
    });

    this.getallUsers();
  }

  showdelete() {
    console.log('button is pressed');
    this.showcreatedialog = true;
    console.log(this.showcreatedialog);
  }

  cancelevent() {
    this.showcreatedialog = false;
    this.showeditdialog = false;
  }

  get cuf() {
    return this.createUserform.controls;
  }

  createUser(userDetails) {
    console.log(this.showcreatedialog);
    this.showcreatedialog = false;
    console.log(this.showcreatedialog);
    this.apiService.createUser(userDetails).subscribe((data) => {
      this.responsemsg = data;
      this.router.navigate['/userDetails'];
      console.log(this.responsemsg);
    });
    console.log(this.showcreatedialog);
  }

  getallUsers(): any {
    this.apiService.getAllUser().subscribe((data: UserDetails[]) => {
      this.userDetailsresponse = data;
      console.log(this.userDetailsresponse);
    });
  }

  /*updateRecord(item.userId):void{

    }*/

  deleteUser(userId): any {
    console.log('button is clicked....');
    this.apiService.deleteUser(userId).subscribe((data) => {
      this.deleteuserresponse = data;
      console.log(this.deleteuserresponse);
    });
    this.router.navigate['/userDetails'];
  }

  showRecordtoEdit(item) {
    this.userId = item.userId;
    this.showeditdialog = true;
    this.editUserform = this.fb.group({
      firstName: item.firstName,
      lastName: item.lastName,
      vehicleNumber: item.vehicleNumber,
      phoneNumber: item.phoneNumber,
      vehicleCode: item.vehicleCode,
    });
    console.log(item);
    this.router.navigate['/userDetails'];
  }

  editUser(item) {
    this.apiService.updateUser(this.userId, item).subscribe((data) => {
      this.userUpdateresponse = data;
      console.log(this.userUpdateresponse);
    });
    this.showeditdialog = false;
  }
}
