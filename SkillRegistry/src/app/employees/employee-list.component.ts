import { Component, OnInit } from '@angular/core';

import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  pageTitle = 'Employee List';
  imageWidth = 80;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredEmployees = this.listFilter ? this.performFilter(this.listFilter) : this.employees;
  }

  filteredEmployees: IEmployee[] = [];
  employees: IEmployee[] = [];

  constructor(private employeeService: EmployeeService) {

  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Employee List: ' + message;
  }

  performFilter(filterBy: string): IEmployee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employees.filter((employee: IEmployee) =>
      employee.skills.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe({
      next: employees => {
        this.employees = employees;
        this.filteredEmployees = this.employees;
      },
      error: err => this.errorMessage = err
    });
  }
}
