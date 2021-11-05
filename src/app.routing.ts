import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './app/home';
import { LoginComponent } from './app/login';
import { RegisterComponent } from './app/register';
import { AuthGuard } from './app/_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);