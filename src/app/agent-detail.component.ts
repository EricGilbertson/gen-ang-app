import { Component, Input } from '@angular/core';
import { Agent } from './agent';

@Component({
  selector: 'agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./app.component.css']
})

export class AgentDetailComponent {
  @Input() agent: Agent;
}
