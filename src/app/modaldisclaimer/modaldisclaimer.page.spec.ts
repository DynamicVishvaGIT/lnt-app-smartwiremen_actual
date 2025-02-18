import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModaldisclaimerPage } from './modaldisclaimer.page';

describe('ModaldisclaimerPage', () => {
  let component: ModaldisclaimerPage;
  let fixture: ComponentFixture<ModaldisclaimerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaldisclaimerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModaldisclaimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
