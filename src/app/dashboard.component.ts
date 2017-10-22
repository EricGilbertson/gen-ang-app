import { Component, OnInit } from '@angular/core';

import { Agent } from './agent';
import { AgentService } from './agent.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  agents: Agent[] = [];
  constructor(private agentService: AgentService) { }
  ngOnInit(): void {
    this.agentService.getAgents()
      .then(promisedAgents => this.agents = promisedAgents.slice(1, 5));
  }
}
