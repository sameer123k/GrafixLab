import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderCreateComponent } from './loader-create.component';

describe('LoaderCreateComponent', () => {
  let component: LoaderCreateComponent;
  let fixture: ComponentFixture<LoaderCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
