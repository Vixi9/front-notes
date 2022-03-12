import { Grade } from 'src/app/services/models/Grade';

export interface TeachingInterface {
  name: string;
  code: string;
  grades: Grade[];
}

export class Teaching implements TeachingInterface {
  name: string;
  code: string;
  grades: Grade[];

  constructor(name: string, code: string) {
    this.name = name;
    this.code = code;
    this.grades = [];
  }
}
