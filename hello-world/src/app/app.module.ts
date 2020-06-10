import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import {DropdownDirective} from './dropdown/dropdown.directive';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service'
import { HttpClientModule } from '@angular/common/http' 

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    DropdownDirective,
    DropdownComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
