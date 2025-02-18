import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisclaimermodalPage } from './disclaimermodal.page';

describe('DisclaimermodalPage', () => {
  let component: DisclaimermodalPage;
  let fixture: ComponentFixture<DisclaimermodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisclaimermodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisclaimermodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
