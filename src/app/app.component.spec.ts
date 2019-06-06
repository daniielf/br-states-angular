import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StatesService } from '../providers/states.service';
import { StateCardComponent } from './state-card/state-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StateCardComponent
      ],
      imports: [FormsModule, MatExpansionModule, HttpClientModule, MatDialogModule],
      providers: [StatesService, HttpClient],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'BRAZILIAN STATES'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.pageTitle).toEqual('BRAZILIAN STATES');
  });

  it('should have a search input', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').textContent).toEqual('');
  });
});
