import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisirContactComponent } from './saisir-contact.component';

describe('SaisirContactComponent', () => {
  let component: SaisirContactComponent;
  let fixture: ComponentFixture<SaisirContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisirContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaisirContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
