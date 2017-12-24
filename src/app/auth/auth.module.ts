import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { SharedModule,MaterialModule } from '../shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'register',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  }
]);

@NgModule({
  imports: [
    authRouting,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AuthComponent
  ],

  providers: [
    NoAuthGuard
  ]
})
export class AuthModule {}
