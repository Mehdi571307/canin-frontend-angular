import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChiensComponent } from './liste-chiens.component';

describe('ListeChiensComponent', () => {
  let component: ListeChiensComponent;
  let fixture: ComponentFixture<ListeChiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeChiensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeChiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
