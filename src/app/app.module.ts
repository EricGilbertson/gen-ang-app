import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AgentDetailComponent } from './agent-detail.component';
import { AgentsComponent } from './agents.component';
import { AgentService } from './agent.service';
import { DashboardComponent } from './dashboard.component';

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
    RouterModule.forRoot([{
      path: 'agents',
      component: AgentsComponent
    }, {
      path: 'dashboard',
      component: DashboardComponent
    }, {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'detail/:id',
      component: AgentDetailComponent
    }])
  ],
  providers: [
    AgentService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
