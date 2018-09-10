import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatGridTileTestComponent } from './mat-grid-tile-test.component';

describe('MatGridTileTestComponent', () => {
  let component: MatGridTileTestComponent;
  let fixture: ComponentFixture<MatGridTileTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatGridTileTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatGridTileTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
