import { Component, OnInit, OnDestroy ,ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../api.service';
import { EMPTY, interval, Observable, of, Subscription } from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import { Myclass, sensorId } from '../../myclass';
import { style, animate, animation, animateChild, useAnimation, group, sequence, transition, state, trigger, query, stagger, keyframes } from '@angular/animations';


@Component({
  selector: 'app-sub-dashboard',
  templateUrl: './sub-dashboard.component.html',
  styleUrls: ['./sub-dashboard.component.css'],
  providers: [ApiService],
  // bounce img1 starts
  animations: [
  trigger('bounce', [
    transition('* => *', [
      animate(
        1000,
        keyframes([
          style({ transform: 'scale(.6)', offset: 0 }),
          style({
            transform: 'scale(1.1)',
            offset: 0.33,
          }),
          style({ transform: 'scale(.6)', offset: 1.0 }),
        ])
      ),
    ]),
  ]),
]
})
export class SubDashboardComponent implements OnInit {
  observer1$!:Observable<any[]>;
  myClass=new Myclass();
  Subscription: Subscription;
  interVal: Subscription;
  display=true;
  zoneData:any=[];
  hide=false;  bounceImg1 = false;

  constructor(private ApiService: ApiService,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.myClass = new Myclass();
    this.myClass.screenLoader=true;
    setInterval(() => (this.bounceImg1 = !this.bounceImg1), 1000);
    // this.initCall();
    let params = {}
    interval(3000).pipe(mergeMap(()=>this.ApiService.getSVGData(params)),
    catchError(err=>{
      console.log(err)
      return EMPTY
    }
    )).subscribe(response=>{
      console.log(response)

      of(response).pipe(map(z=>{
        console.log(z)
      }))
      // response.forEach(newItem => {
      //   let index = this.myClass.data.findIndex((rec: sensorId) => {
      //     return rec.sensorid == newItem.sensorid;
      //   })
      //   if (index == -1) {
      //     // not found then add fresh
      //     // history
      //     let item: any = {};
      //     item.sensorid = newItem.sensorid;
      //     item.history = [newItem];
      //     item.lat = newItem.lat
      //     item.lng = newItem.lng
      //     item.zone = newItem.zone
      //     item.type = newItem.type
      //     item.unit = newItem.unit
      //     item.value = newItem.values1
      //     item.date = newItem.date
      //     item.status = newItem.status

      //     this.myClass.data.push(item);

      //   } else {
      //     // update lat/lng 

      //     this.myClass.data.filter((newObj: sensorId) => {
      //       return newObj.sensorid == response[index].sensorid;
      //     }).map((result: sensorId) => {
      //       result.history.push(response[index])
      //     })

      //   }
      //   this.myClass.response = this.myClass.data.map(item => {

      //     item.yPos = ''
      //     item.xPos = ''

          
      //     if(item.zone.toUpperCase()=='IBD'){
      //       item.yPos=260
      //       item.xPos=663
      //     }
      //     else if(item.zone.toUpperCase()=='SMD'){
      //       item.yPos=180
      //       item.xPos=220
      //     } else if(item.zone.toUpperCase()=='ABD'){
      //       item.yPos=420
      //       item.xPos=365
      //     } else if(item.zone.toUpperCase()=='PLP'){
      //       item.yPos=35
      //       item.xPos=113
      //     }
      //     return item;
      //   });
   
      // })
      
    })



    // this.getDataforSVG();
  }

  getStatus(device:string){
  if(device=='L'){
    // this.mylass=

    return true;

  }
  }

  initCall(){
    this.interVal = interval(6000).subscribe(res => {
      // console.log(res)
      this.observer1$=this.ApiService.getSVGData(params).pipe(map(x=>{
        // console.log(x)
        // this.cdr.detectChanges();        
        return  x;
      }));

      this.observer1$.subscribe(z =>{

        this.zoneData= z.map(x=>{
          if(x.type=='L'){
            x.img='motor';
          }else if(x.type=='P'){
            x.img='pump';
          }
          return  x;
        });
      })
      
      // this.getDataforSVG();
    })
    let params = {}
  }
  
  // getObservable() { (2)
  //   return Observable
  //       .take(10)
  //       .map((v) => v * v);
  // }
  getDataforSVG() {
    let params = {}
    this.Subscription = this.ApiService.getSVGData(params).subscribe((response) => {
      if (response && response.length > 0) {
     
        this.myClass.screenLoader=false

        response.forEach(newItem => {
          let index = this.myClass.data.findIndex((rec: sensorId) => {
            return rec.sensorid == newItem.sensorid;
          })
          if (index == -1) {
            // not found then add fresh
            // history
            let item: any = {};
            item.sensorid = newItem.sensorid;
            item.history = [newItem];
            item.lat = newItem.lat
            item.lng = newItem.lng
            item.zone = newItem.zone
            item.type = newItem.type
            item.unit = newItem.unit
            item.value = newItem.values1
            item.date = newItem.date
            item.status = newItem.status

            this.myClass.data.push(item);

          } else {
            // update lat/lng 

            this.myClass.data.filter((newObj: sensorId) => {
              return newObj.sensorid == response[index].sensorid;
            }).map((result: sensorId) => {
              result.history.push(response[index])
            })

          }
          this.myClass.response = this.myClass.data.map(item => {

            item.yPos = ''
            item.xPos = ''

            
            if(item.zone.toUpperCase()=='IBD'){
              item.yPos=260
              item.xPos=663
            }
            else if(item.zone.toUpperCase()=='SMD'){
              item.yPos=180
              item.xPos=220
            } else if(item.zone.toUpperCase()=='ABD'){
              item.yPos=420
              item.xPos=365
            } else if(item.zone.toUpperCase()=='PLP'){
              item.yPos=35
              item.xPos=113
            }
            return item;
          });
     
        })

     }


      console.log(this.myClass)
    })
  }
  ngOnDestroy(){
    if(this.Subscription){
      this.Subscription.unsubscribe()
    }
    if(this.interVal){
    this.interVal.unsubscribe();
    }
  }
}
