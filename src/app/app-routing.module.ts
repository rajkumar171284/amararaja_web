import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './modules/map/map.component';
import { StartupComponent } from './modules/startup/startup.component';
import { FilesComponent } from './modules/files/files.component';
import { PlotComponent } from './modules/plot/plot.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SubDashboardComponent } from './modules/sub-dashboard/sub-dashboard.component';
import { AlertPanelComponent } from './modules/alert-panel/alert-panel.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
   {
    path: "alert-panel", component:AlertPanelComponent
  },
  
  {
    path: 'dashboard', component: SubDashboardComponent
  },
  {
    path: 'mimic', component: DashboardComponent
  },
  {
    path: 'home', component: StartupComponent
  },
  {
    path: 'start', component: MapComponent
  },
  {
    path: 'csv', component: FilesComponent
  },
  {
    path: 'plot', component: PlotComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
