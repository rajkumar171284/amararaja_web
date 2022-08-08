import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatDialog } from '@angular/material/dialog';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddAlertComponent } from '../../modules/add-alert/add-alert.component';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.css']
})
export class AlertListComponent implements OnInit {
  loading = false;
  dataSource :any= [];
  newForm: FormGroup;
  displayedColumns: string[] = [
    "PID", "ALERT_NAME","THRESHOLD_MIN","THRESHOLD_MAX","THRESHOLD_AVG","ALERT_TYPE","CREATED_DATE","EXPIRY_DATE", "actions"];

  constructor(private fb: FormBuilder,private dataService: ApiService, public dialog: MatDialog) { 
    this.newForm = this.fb.group({
      ASSET_CONFIG_ID: [''],

    });
  }


  ngOnInit(): void {
  }

  
  editItem(item: any) {
    
    // const ref=this.dialog.open(AddAlertComponent, {
    //   width: '800px',
    //   data: item
    // });
    // ref.afterClosed().subscribe(result => {
    // this.getAllAssetConfigs();
    // });
  }
  removeItem(item: any) {
    // this.dataService.deleteCompanyByID(item).subscribe(res => {
    //   this.getAllAssetConfigs();
    // });

  }

}
