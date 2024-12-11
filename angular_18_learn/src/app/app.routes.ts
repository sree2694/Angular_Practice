import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/databinding/databinding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';
import { ForComponent } from './components/controlFlow/for/for.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { LayoutComponent } from './components/layout/layout.component';
import { GetAPIComponent } from './components/apiIntegration/get-api/get-api.component';
import { PostAPIComponent } from './components/apiIntegration/post-api/post-api.component';
import { LifecycleEventComponent } from './components/lifecycle-event/lifecycle-event.component';

export const routes: Routes = [
  //default route
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'add-emp',
        component: AddEmployeeComponent,
      },
      {
        path: 'data-binding',
        component: DataBindingComponent,
      },
      {
        path: 'emp-list',
        component: EmployeeListComponent,
      },
      {
        path: 'structural-dir',
        component: StructuralDirComponent,
      },
      {
        path: 'attributedirective',
        component: AttributeDirectiveComponent,
      },
      {
        path: 'if-else',
        component: IfelseComponent,
      },
      {
        path: 'for',
        component: ForComponent,
      },
      {
        path: 'pipe',
        component: PipeComponent,
      },
      {
        path: 'template-form',
        component: TemplateComponent,
      },
      {
        path: 'reactive-form',
        component: ReactiveComponent,
      },
      {
        path: 'get-api',
        component: GetAPIComponent
    },
    {
        path: 'post-api',
        component: PostAPIComponent
    },
    {
      path: 'Life-cycle',
      component: LifecycleEventComponent
  },
    ],
  },
];
