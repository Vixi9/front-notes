import { Grade } from 'src/app/services/models/Grade';

export interface Teaching {
  label: string;
  grades: Grade[];
}
