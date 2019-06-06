import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCardComponent } from './state-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('StateCardComponent', () => {
  let component: StateCardComponent;
  let fixture: ComponentFixture<StateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateCardComponent ],
      imports: [MatDialogModule, MatExpansionModule, BrowserAnimationsModule, MatButtonModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a stateName`, () => {
    const fixture = TestBed.createComponent(StateCardComponent);
    expect(fixture.componentInstance['stateName']).toBeTruthy();
  });

  it(`should have a stateInitial`, () => {
    const fixture = TestBed.createComponent(StateCardComponent);
    expect(fixture.componentInstance['stateInitial']).toBeTruthy();
  });

  it(`should have a stateRegion`, () => {
    const fixture = TestBed.createComponent(StateCardComponent);
    expect(fixture.componentInstance['stateRegion']).toBeTruthy();
  });

  it(`should have a stateRegionInitial`, () => {
    const fixture = TestBed.createComponent(StateCardComponent);
    expect(fixture.componentInstance['stateRegionInitial']).toBeTruthy();
  });
});
