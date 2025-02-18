import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchemeDetailPage } from './scheme-detail.page';

describe('SchemeDetailPage', () => {
  let component: SchemeDetailPage;
  let fixture: ComponentFixture<SchemeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchemeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
