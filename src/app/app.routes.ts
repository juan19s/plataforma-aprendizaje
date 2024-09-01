import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./views/components/home/home.component').then(c => c.HomeComponent)},
];
