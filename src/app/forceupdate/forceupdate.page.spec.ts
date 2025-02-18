import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForceupdatePage } from './forceupdate.page';

describe('ForceupdatePage', () => {
  let component: ForceupdatePage;
  let fixture: ComponentFixture<ForceupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceupdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForceupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
