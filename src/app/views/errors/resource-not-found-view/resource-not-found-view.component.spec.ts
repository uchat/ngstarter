import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceNotFoundViewComponent } from './resource-not-found-view.component';

describe('ResourceNotFoundViewComponent', () => {
  let component: ResourceNotFoundViewComponent;
  let fixture: ComponentFixture<ResourceNotFoundViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceNotFoundViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceNotFoundViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
