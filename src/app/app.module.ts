import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgentDetailComponent } from './agent-detail.component';
import { AgentsComponent } from './agents.component';
import { AgentService } from './agent.service';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AgentDetailComponent,
    AgentsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AgentService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
