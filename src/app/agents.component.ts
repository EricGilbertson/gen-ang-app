import { Component, OnInit } from '@angular/core';
import { Agent } from './agent';
import { AgentService } from './agent.service';

@Component({
  selector: 'local-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./app.component.css']
})

export class AgentsComponent implements OnInit {
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
