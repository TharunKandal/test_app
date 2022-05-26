import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { TestComponent } from './test/test.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: TestComponent },
      { path: 'user/:id/edit', component: FormcomponentComponent },
      { path: 'user/:id', component: FormcomponentComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
