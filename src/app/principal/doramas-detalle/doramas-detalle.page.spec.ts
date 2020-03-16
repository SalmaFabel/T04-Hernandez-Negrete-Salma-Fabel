import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoramasDetallePage } from './doramas-detalle.page';

describe('DoramasDetallePage', () => {
  let component: DoramasDetallePage;
  let fixture: ComponentFixture<DoramasDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoramasDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoramasDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
