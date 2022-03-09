import { Teaching } from 'src/app/services/models/Teaching';

export interface TeachingUnitInterface {
  name?: string;
  teachings: Teaching[];
}

export class TeachingUnit implements TeachingUnitInterface {
  name?: string | undefined;
  teachings: Teaching[];

  constructor() {
    this.teachings = [];
  }
}
