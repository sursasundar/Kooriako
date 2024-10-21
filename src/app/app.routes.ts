import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home', 
        pathMatch: 'full'
    },
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent)
    }
];