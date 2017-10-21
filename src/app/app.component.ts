import { Component } from '@angular/core';
import { Agent } from './agent';

const AGENTS: Agent[] = [
  { id: 11, name: 'Running Bear' },
  { id: 12, name: 'Starchy' },
  { id: 13, name: 'Orcslayer Tzu' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Worlder';
  selectedAgent: Agent;
  agents = AGENTS;

  onSelect(agent: Agent): void {
    this.selectedAgent = agent;
  }
}
