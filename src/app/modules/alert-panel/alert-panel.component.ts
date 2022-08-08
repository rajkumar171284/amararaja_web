import { Component, OnInit } from '@angular/core';
import { AddAlertComponent } from '../../modules/add-alert/add-alert.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-panel',
  templateUrl: './alert-panel.component.html',
  styleUrls: ['./alert-panel.component.css']
})
export class AlertPanelComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    
      const dialogRef = this.dialog.open(AddAlertComponent, {
        width: '800px',
        data: null
      });

      dialogRef.afterClosed().subscribe(result => {
       
      });
    } 


  tabChanged(e: any) {
    // console.log(e)
    // this.tabIndex = e.index;//active tab
  }

}
