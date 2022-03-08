import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  public links: any[] = [
    { reference: "", text: "Accueil", icon: "home" },
    { reference: "/grades", text: "Notes", icon: "grade" }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
