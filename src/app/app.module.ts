import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Tut16Component } from './tut16/tut16.component';
import { Tut17Component } from './tut17/tut17.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Tut18Component } from './tut18/tut18.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { Tut19Component } from './tut19/tut19.component';
import {MatSliderModule} from '@angular/material/slider';
import { Tut20Component } from './tut20/tut20.component';
import { UsersComponentComponent } from './users-component/users-component.component';
import { Tut21Component } from './tut21/tut21.component';
import { User2ComponentComponent } from './user2-component/user2-component.component';
import { Tut22Component } from './tut22/tut22.component';
import { ChildTut22Component } from './child-tut22/child-tut22.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Tut16Component,
    Tut17Component,
    Tut18Component,
    Tut19Component,
    Tut20Component,
    UsersComponentComponent,
    Tut21Component,
    User2ComponentComponent,
    Tut22Component,
    ChildTut22Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
