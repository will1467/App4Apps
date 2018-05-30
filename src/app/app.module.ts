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
import { PostgreSqlService } from './postgre-sql.service';
import { AddIdeaComponent } from './add-idea/add-idea.component';

const Routes = [
  {path: 'login', component : LoginComponent},
  {path : '', component: RegisterComponent},
  {path: 'main', component: IdeaParentComponent, runGuardsAndResolvers: "always"},
  {path: 'addIdea', component: AddIdeaComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IdeaParentComponent,
    IdeaChildComponent,
    AddIdeaComponent
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
  providers: [PostgreSqlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
