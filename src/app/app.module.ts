import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';

import { ChildComponent } from './child/child.component';
import { ChangeService } from './change.service';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent,  ChildComponent, ParentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ChangeService]
})
export class AppModule { }
