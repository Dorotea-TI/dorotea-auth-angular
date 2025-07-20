import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoroteaAuthComponent } from './dorotea-auth.component';

describe('DoroteaAuthComponent', () => {
  let component: DoroteaAuthComponent;
  let fixture: ComponentFixture<DoroteaAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoroteaAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoroteaAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
