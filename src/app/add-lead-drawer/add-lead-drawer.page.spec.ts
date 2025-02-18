import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddLeadDrawerPage } from './add-lead-drawer.page';

describe('AddLeadDrawerPage', () => {
  let component: AddLeadDrawerPage;
  let fixture: ComponentFixture<AddLeadDrawerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLeadDrawerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddLeadDrawerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
