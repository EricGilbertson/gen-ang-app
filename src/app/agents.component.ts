import { Component, OnInit } from '@angular/core';
import { Agent } from './agent';
import { AgentService } from './agent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'local-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./app.component.css']
})
export class AgentsComponent implements OnInit {
  selectedAgent: Agent;
  agents: Agent[];
  constructor(
    private agentService: AgentService,
    private router: Router) {}

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

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedAgent.id]);
  }
}
