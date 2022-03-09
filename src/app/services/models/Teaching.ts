import { Grade } from 'src/app/services/models/Grade';

export interface Teaching {
  name?: string;
  code?: string;
  grades: Grade[];
}
