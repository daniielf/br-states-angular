import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'state-card',
  templateUrl: './state-card.component.html',
  styleUrls: ['./state-card.component.css']
})
export class StateCardComponent implements OnInit {
  @Input('stateName') stateName: string = '[STATE NAME]';
  @Input('stateInitial') stateInitial: string = '[STATE INITIAL]';
  @Input('stateRegion') stateRegion: string = '[STATE REGION]';
  @Input('stateRegionInitial') stateRegionInitial: string = '[STATE REGION INITIAL]';
  @Output('openDialog') dialog: EventEmitter<any> = new EventEmitter();

  @ViewChild('togglePanel', { read: false, static: true }) panel: MatExpansionPanel;

  public detailLinkText: string = 'View more Details';
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  public toggleView(): void {
    this.panel.disabled = false;
    this.panel.expanded ? this.closePanel() : this.openPanel();
    this.panel.disabled = true;
  }

  public openPanel(): void {
    this.panel.open();
    this.detailLinkText = 'View less Details';
  }

  public closePanel(): void {
    this.panel.close();
    this.detailLinkText = 'View more Details';
  }

  public openDialog(): void {
    this.dialog.emit();
  }

}
