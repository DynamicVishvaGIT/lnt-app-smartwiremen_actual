import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TdsPage } from './tds.page';

describe('TdsPage', () => {
  let component: TdsPage;
  let fixture: ComponentFixture<TdsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TdsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
