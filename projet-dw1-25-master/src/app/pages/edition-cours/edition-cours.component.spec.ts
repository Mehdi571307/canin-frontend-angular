import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionCoursComponent } from './edition-cours.component';

describe('EditionCoursComponent', () => {
  let component: EditionCoursComponent;
  let fixture: ComponentFixture<EditionCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditionCoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
