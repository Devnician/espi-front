import { Inject } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChildTableComponent } from './child-table.component';

describe('ChildTableComponent', () => {
  let component: ChildTableComponent;
  let fixture: ComponentFixture<ChildTableComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ChildTableComponent],
        imports: [
          NoopAnimationsModule,
          MatPaginatorModule,
          MatSortModule,
          MatTableModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.dataSource = [];
    component.table = Inject(MatTable);
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
