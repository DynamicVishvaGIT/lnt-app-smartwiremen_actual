import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScancounterboyPage } from './scancounterboy.page';

describe('ScancounterboyPage', () => {
  let component: ScancounterboyPage;
  let fixture: ComponentFixture<ScancounterboyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScancounterboyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScancounterboyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
