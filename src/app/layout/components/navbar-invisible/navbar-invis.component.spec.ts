import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInvisibleComponent } from './navbar-invisible.component';

describe('NavbarInvisComponent', () => {
  let component: NavbarInvisibleComponent;
  let fixture: ComponentFixture<NavbarInvisibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarInvisibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarInvisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
