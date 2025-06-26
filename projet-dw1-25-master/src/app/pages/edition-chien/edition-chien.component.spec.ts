import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionChienComponent } from './edition-chien.component';

describe('EditionChienComponent', () => {
  let component: EditionChienComponent;
  let fixture: ComponentFixture<EditionChienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditionChienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionChienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
