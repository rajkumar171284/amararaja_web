import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  session: any;
  title = 'pro13';
  options: FormGroup;

  constructor(private router: Router,private fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 60,
    });
  }
  routes:any = [
    {
      url: '/dashboard',label:'Dashboard', name: 'fa-user', img: 'icon-1.png', iconname: 'bar_chart'
    },
    // {
    //   url: '/admin',label:'Admin Panel', name: 'fa-user', img: 'icon-1.png', iconname: 'bar_chart'
    // },
    {
      url: '/alert-panel',label:'Alert Panel', name: 'fa-user', img: 'icon-1.png', iconname: 'bar_chart'
    },
    // {
    //   url: '/start',label:'Dashboard',  name: 'fa-tag', img: 'icon-2.png', iconname: 'account_box'
    // },
    // {
    //   url: '/csv',label:'Dashboard',  name: 'fa-file', img: 'icon-1.png', iconname: 'settings'
    // },
    // {
    //   url: '/plot',label:'Dashboard',  name: 'fa-file', img: 'icon-2.png', iconname: 'add_alert'
    // }
  ]

  logOut() {
    sessionStorage.clear();
    sessionStorage.removeItem('session');
    this.router.navigate(['login'])
  }


  routePath(a:any){

  }
  
  openDialog() {
    // if (this.companyData) {
    //   this.companyData.isProfileChange = true;
    // }
    // const dialogRef = this.dialog.open(AddCompanyComponent, {
    //   width: '800px',
    //   data: this.companyData ? this.companyData : null
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   // console.log('afterClosed')


    // });

  }
}
