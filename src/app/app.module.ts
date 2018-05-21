import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { IdeaParentComponent } from './idea-parent/idea-parent.component';
import { IdeaChildComponent } from './idea-child/idea-child.component';

const Routes = [
  {path: 'login', component : LoginComponent},
  {path : '', component: RegisterComponent},
  {path: 'main', component: MainComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    IdeaParentComponent,
    IdeaChildComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      Routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
