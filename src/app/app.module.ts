import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IdeaParentComponent } from './idea-parent/idea-parent.component';
import { IdeaChildComponent } from './idea-child/idea-child.component';
import { PostgreSqlService } from './services/postgre-sql.service';
import { LoginRedirectService } from './services/login-redirect.service';
import { EnsureAuthenticatedService } from './services/ensure-authenticated.service';
import { AddIdeaComponent } from './add-idea/add-idea.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommentComponent } from './comment/comment.component';

type RunGuardsAndResolvers = string;

const Routes = [
  {path: 'login', component : LoginComponent, canActivate : [LoginRedirectService]},
  {path : '', component: RegisterComponent, canActivate : [LoginRedirectService]},
  {path: 'main',  runGuardsAndResolvers: 'always', component: IdeaParentComponent, canActivate : [EnsureAuthenticatedService]},
  {path: 'addIdea', component: AddIdeaComponent, canActivate : [EnsureAuthenticatedService] }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IdeaParentComponent,
    IdeaChildComponent,
    AddIdeaComponent,
    NavBarComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      Routes, {onSameUrlNavigation : 'reload'}
    ),
  ],
  providers: [PostgreSqlService, LoginRedirectService, EnsureAuthenticatedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
