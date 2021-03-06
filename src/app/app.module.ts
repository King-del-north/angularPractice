import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


/* Components */
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';

/* Services */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
