import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Agent } from './agent';
import { AgentService } from './agent.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.css']
})
export class AgentDetailComponent implements OnInit {
  @Input() agent: Agent;

  constructor (
    private agentService: AgentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap) =>
      this.agentService.getAgent(+params.get('id'))).
        subscribe(agent => this.agent = agent);
  }

  goBack(): void {
    this.location.back();
  }
}
