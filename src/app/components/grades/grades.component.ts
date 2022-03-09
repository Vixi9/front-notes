import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { Grade } from 'src/app/services/models/Grade';
import { TeachingUnit } from 'src/app/services/models/TeachingUnit';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  public teachingUnits: TeachingUnit[];

  constructor(private route: ActivatedRoute) {
    this.teachingUnits = [];
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.teachingUnits = data['gradesData'] as [];
      console.log(this.teachingUnits);
    });
  }

  public getGradeColor(grade: Grade): string {
    if (grade.value < 4) {
      return 'red';
    } else if (grade.value < 10) {
      return 'orange';
    } else {
      return 'green';
    }
  }
}
