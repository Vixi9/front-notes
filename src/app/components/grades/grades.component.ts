import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlatGrade } from 'src/app/services/models/FlatGrade';
import { FlatGradeTreeService } from 'src/app/services/flat-grade-tree.service';
import { Grade } from 'src/app/services/models/Grade';
import { TeachingUnit } from 'src/app/services/models/TeachingUnit';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  public teachingUnits: TeachingUnit[];
  public flatGrades: FlatGrade[];
  public displayedColumns: String[] = [
    'name',
    'code',
    'coefficient',
    'value',
    'scale'
  ];
  private route: ActivatedRoute;
  private flatGradeTreeService: FlatGradeTreeService;

  constructor(
    route: ActivatedRoute,
    flatGradeTreeService: FlatGradeTreeService
  ) {
    this.route = route;
    this.flatGradeTreeService = flatGradeTreeService;
    this.teachingUnits = [];
    this.flatGrades = [];
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.teachingUnits = data['gradesData'] as [];
      this.flatGrades = this.flatGradeTreeService.toFlatGradeTree(
        data['gradesData']
      );
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
