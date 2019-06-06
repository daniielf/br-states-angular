import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { DialogAlertComponent } from './dialog-alert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

describe('DialogAlertComponent', () => {
  let component: DialogAlertComponent;
  let fixture: ComponentFixture<DialogAlertComponent>;

  beforeEach(async(() => {
    const matDialogRef = {
      close: jasmine.createSpy('close')
    };

    TestBed.configureTestingModule({
      declarations: [ DialogAlertComponent ],
      providers: [{
        provide: MatDialogRef,
        useValue: matDialogRef
      }],
      imports: [MatDialogModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
