import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ClientAddComponent } from './component/client-add/client-add.component';
import { ClientListComponent } from './component/client-list/client-list.component';

import { FormsModule } from '@angular/forms';

//

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptorService } from './service/auth-interceptor.service';

import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientAddComponent,
    ClientListComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
