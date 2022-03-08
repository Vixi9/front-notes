import { Grade } from 'src/app/services/models/Grade';

export interface TeachingUnit {
  name: string;
  grades: Grade[];
}
