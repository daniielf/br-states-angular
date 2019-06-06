import { Component } from '@angular/core';
import { StatesService } from '../providers/states.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pageTitle = 'BRAZILIAN STATES';

  public currentlyDisplayingStates = [];
  public completeStateList = [];

  public inputText = '';
  constructor(public statesService: StatesService, public dialog: MatDialog) {
    this.loadStates();
  }

  public loadStates() {
    this.statesService.getAllStates().then((result) => {
      let resultMapped = this.sortedStates(result);
      this.completeStateList = resultMapped;
      this.currentlyDisplayingStates = this.completeStateList;
    }).catch((err) => {
      console.log('AppComponent', 'loadStates', err);
    });
  }

  public sortedStates(list: Array<any>): Array<any> {
    return list.sort((a,b) => {
      if (a.nome > b.nome) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  public searchState(inputText: string = this.inputText) {
    this.currentlyDisplayingStates = this.completeStateList.filter((state) => {
      return state.nome.toLowerCase().indexOf(inputText.toLowerCase()) !== -1;
    })
  }

  openDialog() {
    this.dialog.open(DialogAlertComponent, {
      width: '300px'
    });
  }
}
