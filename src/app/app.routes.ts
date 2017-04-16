import { LoginComponent } from './login/login.component';
import { DataTableComponent } from './data-table/data-table.component';
import { Routes } from '@angular/router/';

export const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch:'full' },
    { path: 'login', component: LoginComponent },
    { path: 'main', component: DataTableComponent }
];