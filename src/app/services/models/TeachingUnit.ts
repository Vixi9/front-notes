import { Teaching } from 'src/app/services/models/Teaching';

export interface TeachingUnitInterface {
  name?: string;
  teachings: Teaching[];
}

export class TeachingUnit implements TeachingUnitInterface {
  name: string;
  teachings: Teaching[];

  constructor(name: string) {
    this.name = name;
    this.teachings = [];
  }
}
