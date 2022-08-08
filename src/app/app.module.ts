import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './modules/map/map.component';
import { StartupComponent } from './modules/startup/startup.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { FilesComponent } from './modules/files/files.component';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {VirtualScrollerModule} from 'primeng/virtualscroller';
import{ScrollingModule} from '@angular/cdk/scrolling';
import {GMapModule} from 'primeng/gmap';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputTextModule} from 'primeng/inputtext';
import {ChartModule} from 'primeng/chart';
import { PlotComponent } from './modules/plot/plot.component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { LoaderComponent } from './modules/loader/loader.component';
import { DialogModule } from 'primeng/dialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import {TableModule} from 'primeng/table';
import { PlotlyPieComponent } from './modules/plotly-pie/plotly-pie.component';
import { SensorAlertComponent } from './modules/sensor-alert/sensor-alert.component';
import { SubDashboardComponent } from './modules/sub-dashboard/sub-dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
PlotlyModule.plotlyjs = PlotlyJS;
import { AlertPanelComponent } from './modules/alert-panel/alert-panel.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{AlertListComponent} from './modules/alert-list/alert-list.component';
import { AddAlertComponent } from './modules/add-alert/add-alert.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,AddAlertComponent,
    MapComponent,
    StartupComponent,
    FilesComponent,
    PlotComponent,
    LoaderComponent,
    LoginComponent,
    DashboardComponent,
    PlotlyPieComponent,
    SensorAlertComponent,
    SubDashboardComponent,
    AlertPanelComponent,AlertListComponent,
  ],
  imports: [HttpClientModule,MatTabsModule,MatGridListModule,MatSidenavModule,
    BrowserModule,OverlayPanelModule,MatCardModule,MatMenuModule,
    AppRoutingModule,ScrollingModule,ReactiveFormsModule,MatListModule,MatIconModule,
    BrowserAnimationsModule,TabMenuModule,InputTextModule,GMapModule,VirtualScrollerModule,
    ChartModule,PlotlyModule,DialogModule,ProgressSpinnerModule,FormsModule,TableModule,
    MatToolbarModule,MatTooltipModule,MatButtonModule,MatProgressSpinnerModule,
    MatTableModule,MatDialogModule,MatFormFieldModule,MatSelectModule,MatRadioModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
