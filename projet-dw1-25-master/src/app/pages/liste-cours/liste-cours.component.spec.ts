import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCoursComponent } from './liste-cours.component';

describe('ListeCoursComponent', () => {
  let component: ListeCoursComponent;
  let fixture: ComponentFixture<ListeCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
