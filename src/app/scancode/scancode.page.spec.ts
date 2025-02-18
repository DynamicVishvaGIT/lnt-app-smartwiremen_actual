import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScancodePage } from './scancode.page';

describe('ScancodePage', () => {
  let component: ScancodePage;
  let fixture: ComponentFixture<ScancodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScancodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScancodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
