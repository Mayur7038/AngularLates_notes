import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterDecoratorsComponent } from './parameter-decorators.component';

describe('ParameterDecoratorsComponent', () => {
  let component: ParameterDecoratorsComponent;
  let fixture: ComponentFixture<ParameterDecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParameterDecoratorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParameterDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
