import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    loadComponent: () => import('./components/employee-management/employee-management.component').then(m => m.EmployeeManagementComponent),
    children: [
    
      {
        path: 'work-positions',
        loadComponent: () => import('./components/employee-detail/employee-detail.component').then(m => m.EmployeeDetailComponent)
    }
    ]
  },
 
  
  {
    path: 'forecasts', 
    loadComponent: () => import('./components/forecasts/forecasts.component').then(m => m.ForecastsComponent)
  },
  {
    path: '**',
    redirectTo: '/employees'
  }
];