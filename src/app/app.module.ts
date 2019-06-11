import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StateCardComponent } from './state-card/state-card.component';

import { StatesService } from '../providers/states.service';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    StateCardComponent,
    DialogAlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [DialogAlertComponent],
  providers: [StatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
