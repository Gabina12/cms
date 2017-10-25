import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesMainComponent } from './pages-main.component';

describe('PagesMainComponent', () => {
  let component: PagesMainComponent;
  let fixture: ComponentFixture<PagesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
