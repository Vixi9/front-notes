import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Grade } from 'src/app/services/models/Grade';
import { TeachingUnit } from 'src/app/services/models/TeachingUnit';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent {

  public teachingUnits: TeachingUnit[];

  constructor() {
    this.teachingUnits = [
      { name: "Sciences appliquées", code: "", teachings: [
        { label: "Analyse", grades: [
            { label: "TP d'analyse", value: 15, coefficient: 1 },
          ],
        }],
      },
    ];
  }

  public getGradeColor(grade: Grade): string {
    if (grade.value < 10) {
      return 'red';
    } else if (grade.value == 10) {
      return 'orange'
    } else {
      return 'green';
    }
  }
}
