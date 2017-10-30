import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileManagerCreateComponent } from './file-manager-create.component';

describe('FileManagerCreateComponent', () => {
  let component: FileManagerCreateComponent;
  let fixture: ComponentFixture<FileManagerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileManagerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileManagerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
