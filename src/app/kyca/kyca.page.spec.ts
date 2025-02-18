import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KycaPage } from './kyca.page';

describe('KycaPage', () => {
  let component: KycaPage;
  let fixture: ComponentFixture<KycaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KycaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
