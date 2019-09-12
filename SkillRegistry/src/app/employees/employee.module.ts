import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { EmployeeDetailGuard } from './employee-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'employees', component: EmployeeListComponent },
      {
        path: 'employees/:id',
        canActivate: [EmployeeDetailGuard],
        component: EmployeeDetailComponent
      }
    ]),
    SharedModule
  ],
  declarations: [
    EmployeeListComponent,
    EmployeeDetailComponent,
    ConvertToSpacesPipe
  ]
})
export class EmployeeModule { }
