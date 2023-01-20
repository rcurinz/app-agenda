import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AgendarComponent } from './components/agendar/agendar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IndexComponent } from './pages/index/index.component';
//primeng
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {MenubarModule} from 'primeng/menubar';
import { CheckboxModule } from 'primeng/checkbox';
import {FileUploadModule} from 'primeng/fileupload';
import {PanelMenuModule} from 'primeng/panelmenu';
import {DividerModule} from 'primeng/divider';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AgendarComponent,
    IndexComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    RouterModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    MenubarModule,
    DataViewModule,
    PanelModule,
    DropdownModule,
    InputTextModule,
    RatingModule,
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
