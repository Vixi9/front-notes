import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { GradesService } from './grades.service';
import { TeachingUnit } from './models/TeachingUnit';

@Injectable({
  providedIn: 'root'
})
export class GradesResolver implements Resolve<TeachingUnit[]> {
  constructor(private gradesService: GradesService) { }

  private mockData = [{
    name:"D - Entreprise",
    teachings:[
       {
          grades:[
             {
                value:17,
                scale:20,
                name:"Evaluation entreprise S5",
                coefficient:5
             }
          ],
          name:"Evaluation entreprise S5",
          "code":"C00000227-2"
       },
       {
          grades:[
             {
                value:16,
                scale:20,
                name:"Rapport entreprise S5",
                coefficient:2
             }
          ],
          name:"Rapport S5",
          "code":"C00000228-2"
       },
       {
          grades:[
             {
                value:13,
                scale:20,
                name:"Soutenance S5",
                coefficient:2
             }
          ],
          name:"Soutenance  S5",
          "code":"C00000229-2"
       }
    ]
 },
 {
    name:"C - Sciences appliquées",
    teachings:[
       {
          grades:[
             {
                value:9,
                scale:20,
                name:"Examen Analyse",
                coefficient:1
             }
          ],
          name:"Analyse",
          "code":"C00000176-1"
       },
       {
          grades:[
             {
                value:8,
                scale:20,
                name:"Examen Architectures des e-paiements",
                coefficient:1
             }
          ],
          name:"Architectures des e-paiements",
          "code":"C00000177-1"
       },
       {
          grades:[
             {
                value:14,
                scale:20,
                name:"Examen Mathématiques pour la cryptographie",
                coefficient:1
             },
             {
                value:16,
                scale:20,
                name:"TP Mathématiques pour la cryptographie",
                coefficient:1
             }
          ],
          name:"Mathématiques pour la cryptographie",
          "code":"C00000182-1"
       },
       {
          grades:[
             {
                value:14,
                scale:20,
                name:"Examen Principes des e-Paiements",
                coefficient:1
             }
          ],
          name:"Principes des e-paiements",
          "code":"C00000184-1"
       },
       {
          grades:[
             {
                value:10,
                scale:20,
                name:"Examen Systèmes embarqués",
                coefficient:1
             },
             {
                value:12,
                scale:20,
                name:"TP Systèmes embarqués",
                coefficient:1
             }
          ],
          name:"Systèmes embarqués",
          "code":"C00000185-1"
       }
    ]
 },
 {
    name:"B - Sciences de l'informatique",
    teachings:[
       {
          grades:[
             {
                value:7,
                scale:20,
                name:"Examen Algèbre",
                coefficient:1
             },
             {
                value:16,
                scale:20,
                name:"TP Algèbre",
                coefficient:1
             }
          ],
          name:"Algèbre",
          "code":"C00000175-1"
       },
       {
          grades:[
             {
                value:15,
                scale:20,
                name:"Examen Bases de l'Algorithmique",
                coefficient:1
             }
          ],
          name:"Bases de l'Algorithmique",
          "code":"C00000178-1"
       },
       {
          grades:[
             {
                value:15,
                scale:20,
                name:"Examen Circuits et architectures logiques",
                coefficient:1
             }
          ],
          name:"Circuits et architectures logiques",
          "code":"C00000179-1"
       },
       {
          grades:[
             {
                value:16,
                scale:20,
                name:"Examen Introduction à la Programmation",
                coefficient:1
             },
             {
                value:16,
                scale:20,
                name:"TP Introduction à la Programmation",
                coefficient:1
             }
          ],
          name:"Introduction à la Programmation",
          "code":"C00000181-1"
       },
       {
          grades:[
             {
                value:13,
                scale:20,
                name:"Examen Outils de Développement Logiciel",
                coefficient:1
             },
             {
                value:15,
                scale:20,
                name:"TP Outils de Développement Logiciel",
                coefficient:1
             }
          ],
          name:"Outils de Développement Logiciel",
          "code":"C00000183-1"
       }
    ]
 },
 {
    name:"A - Langues et humanités",
    teachings:[
       {
          grades:[
             {
                value:15,
                scale:20,
                name:"Examen Anglais",
                coefficient:2
             }
          ],
          name:"Anglais S5",
          "code":"C00000235-1"
       },
       {
          grades:[
             {
                value:15,
                scale:20,
                name:"Examen Droit du travail",
                coefficient:1
             }
          ],
          name:"Droit du Travail",
          "code":"C00000230-1"
       },
       {
          grades:[
             
          ],
          name:"Gestion des risques, sécurité, environnement",
          "code":"C00000180-1"
       },
       {
          grades:[
             {
                value:17,
                scale:20,
                name:"Examen Initiation à la gestion de projet",
                coefficient:1
             }
          ],
          name:"Initiation à la gestion de projet",
          "code":"C00000232-1"
       },
       {
          grades:[
             {
                value:16,
                scale:20,
                name:"Examen Management 1",
                coefficient:1
             }
          ],
          name:"Management 1",
          "code":"C00000233-1"
       },
       {
          grades:[
             
          ],
          name:"Responsabilité sociétale et environnementale",
          "code":"C00000234-1"
       }
    ]}];

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TeachingUnit[]> {
    return of(this.mockData); 
  }
}
