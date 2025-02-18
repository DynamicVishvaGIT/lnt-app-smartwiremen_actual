import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanretailerPage } from './scanretailer.page';

describe('ScanretailerPage', () => {
  let component: ScanretailerPage;
  let fixture: ComponentFixture<ScanretailerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanretailerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanretailerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
