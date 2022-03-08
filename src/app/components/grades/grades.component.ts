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
      { name: "Sciences appliquées", grades: [
          { label: "Analyse", value: 5 },
          { label: "Analyse", value: 10 },
          { label: "Analyse", value: 17 },
          { label: "Analyse", value: 17 },
          { label: "Analyse", value: 17 },
          { label: "Analyse", value: 17 },
        ]
      },
      { name: "Informatique", grades: [
          { label: "Analyse", value: 9 },
          { label: "Analyse", value: 20 },
          { label: "Analyse", value: 14 },
        ]
      },
      { name: "Humanités", grades: [
          { label: "Analyse", value: 15 },
          { label: "Analyse", value: 10.5 },
          { label: "Analyse", value: 12 },
        ]
      }
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
