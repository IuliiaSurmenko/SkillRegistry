import { TestBed, async, inject } from '@angular/core/testing';

import { EmployeeDetailGuard } from './employee-detail.guard';

describe('EmployeeDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeDetailGuard]
    });
  });

  it('should ...', inject([EmployeeDetailGuard], (guard: EmployeeDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
