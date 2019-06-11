import { Component } from '@angular/core';
import { StatesService } from '../providers/states.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';

import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pageTitle: string = 'BRAZILIAN STATES';

  public currentlyDisplayingStates: Array<any> = [];
  public completeStateList: Array<any> = [];

  public searchForm: FormGroup;
  
  constructor(public statesService: StatesService, public dialog: MatDialog, public formBuilder: FormBuilder) {
    this.loadStates();
    this.searchForm = this.buildSearchForm();
  }

  private buildSearchForm(): FormGroup {
    return this.formBuilder.group({
      searchText: ''
    });
  }

  private loadStates(): void {
    this.statesService.getAllStates().then((result: Array<any>) => {
      let resultMapped = this.sortedStates(result);
      this.completeStateList = resultMapped;
      this.currentlyDisplayingStates = this.completeStateList;
    }).catch(() => {
      // console.log('AppComponent', 'loadStates', err);
    });
  }

  public sortedStates(list: Array<any>): Array<any> {
    return list.sort((a,b) => {
      return a.nome > b.nome ? 1 : -1;
    });
  }

  public searchState(inputText: string = this.searchForm.get('searchText').value): void {
    this.currentlyDisplayingStates = this.completeStateList.filter((state) => {
      return state.nome.toLowerCase().indexOf(inputText.toLowerCase()) !== -1;
    });
  }

  public openDialog(): void {
    this.dialog.open(DialogAlertComponent, {
      width: '300px'
    });
  }
}
