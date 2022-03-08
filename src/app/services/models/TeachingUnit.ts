import { Teaching } from 'src/app/services/models/Teaching';

export interface TeachingUnit {
  name: string;
  code: string;
  teachings: Teaching[];
}
