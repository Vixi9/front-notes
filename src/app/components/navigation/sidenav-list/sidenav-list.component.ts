import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Output() public sidenavToggle: EventEmitter<any> = new EventEmitter();

  public links: any[] = [
    { reference: "", text: "Accueil", icon: "home" },
    { reference: "/grades", text: "Notes", icon: "grade" }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
