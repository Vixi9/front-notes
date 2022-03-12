import { FlatGrade } from './models/FlatGrade';
import { Injectable } from '@angular/core';
import { TeachingUnit } from './models/TeachingUnit';

@Injectable({
  providedIn: 'root'
})
export class FlatGradeTreeService {
  constructor() {}

  toFlatGradeTree(teachingUnits: TeachingUnit[]): FlatGrade[] {
    const flatGradesTree: FlatGrade[] = [];
    teachingUnits.forEach((teachingUnit) => {
      flatGradesTree.push(new FlatGrade(teachingUnit.name));
      teachingUnit.teachings.forEach((teaching) => {
        flatGradesTree.push(new FlatGrade(teaching.name, teaching.code));
        teaching.grades.forEach((grade) => {
          flatGradesTree.push({
            name: grade.name,
            coefficient: grade.coefficient,
            scale: grade.scale,
            value: grade.value
          });
        });
      });
    });
    return flatGradesTree;
  }
}
