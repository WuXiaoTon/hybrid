import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';

import { AComponent } from './components/a/a.component';
import {GetdataService} from'./services/getdata.service';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { AddDataService } from './services/add-data.service';
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    AComponent,
    InputComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
    ])
  ],
  providers: [GetdataService,AddDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
