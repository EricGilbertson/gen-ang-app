import { Injectable } from '@angular/core';

import { Agent } from './agent';
import { AGENTS } from './default-agents';

@Injectable()
export class AgentService {
  getAgents(): Promise<Agent[]> {
    return Promise.resolve(AGENTS);
  }
  getAgentsSlowly(): Promise<Agent[]> {
    return new Promise( resolve => {
      setTimeout(() => resolve(this.getAgents()), 2000);
      }
    );
  }
}
