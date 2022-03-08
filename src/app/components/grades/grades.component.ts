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
          { label: "Analyse", value: 17 },
          { label: "Analyse", value: 17 },
          { label: "Analyse", value: 17 },
        ]
      },
      { name: "Sciences appliquées", grades: [
          { label: "Analyse", value: 17 },
          { label: "Analyse", value: 17 },
          { label: "Analyse", value: 17 },
        ]
      },
      { name: "Sciences appliquées", grades: [
          { label: "Analyse", value: 17 },
          { label: "Analyse", value: 17 },
          { label: "Analyse", value: 17 },
        ]
      },
      { name: "Sciences appliquées", grades: [
          { label: "Analyse", value: 17 },
          { label: "Analyse", value: 17 },
          { label: "Analyse", value: 17 },
        ]
      },
    ];
  }
}
