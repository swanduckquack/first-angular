import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home.component').then((m) => m.HomeComponent);
        },
    },
    {
        path: 'todos',
        loadComponent: () => {
            return import('./todos/todos.component').then((m) => m.TodosComponent);
        },
    },
    {
        path: 'profile',
        loadComponent: () => {
            return import('./profile/profile.component').then((m) => m.ProfileComponent);
        },
    }
];
