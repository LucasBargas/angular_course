import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThinkComponent } from './components/thinks/create-think/create-think.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListThinksComponent } from './components/thinks/list-thinks/list-thinks.component';
import { ThinkComponent } from './components/thinks/think/think.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcludeThinkComponent } from './components/thinks/exclude-think/exclude-think.component';
import { EditThinkComponent } from './components/thinks/edit-think/edit-think.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CreateThinkComponent,
    ListThinksComponent,
    ThinkComponent,
    LoadingComponent,
    ExcludeThinkComponent,
    EditThinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
