import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectSelected:any={}

  constructor() { }

  ngOnInit() {
  }

  openModal(template: any, project: any){
    this.projectSelected = project;
    template.show();
  }

}
