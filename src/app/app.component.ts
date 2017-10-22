import { Component, OnInit } from '@angular/core';
import { Agent } from './agent';
import { AgentService } from './agent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AgentService]
})

export class AppComponent implements OnInit {
  title = 'Worlder';
  selectedAgent: Agent;
  agents: Agent[];
  constructor(private agentService: AgentService) {}

  onSelect(agent: Agent): void {
    this.selectedAgent = agent;
  }

  getAgents(): void {
    this.agentService.getAgents().then(promisedAgents =>
       this.agents = promisedAgents);
  }

  ngOnInit(): void {
    this.getAgents();
  }
}
