import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddcounterboyPage } from './addcounterboy.page';

describe('AddcounterboyPage', () => {
  let component: AddcounterboyPage;
  let fixture: ComponentFixture<AddcounterboyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcounterboyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddcounterboyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
