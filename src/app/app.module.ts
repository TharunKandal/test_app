import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FormcomponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:'welcome', component:TestComponent },
      { path:'form', component:FormcomponentComponent },
      { path:'', redirectTo:'welcome', pathMatch:'full' }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
