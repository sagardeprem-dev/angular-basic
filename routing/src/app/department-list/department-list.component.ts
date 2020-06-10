import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router'
// import { relative } from 'path';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      department-list
    </h3>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected] = "isSelected(department)" *ngFor = "let department of departments" >
        <span class="badge">{{department.id}}</span>{{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  departments = [
    {"id":1, "name": "aerodynamics"},
    {"id":2, "name": "structures"},
    {"id":3, "name": "propulsion"}
  ];
  constructor(private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
    let id = parseInt(params.get('id'));
    this.selectedId = id;
    });
  }
  onSelect(department) {
    // this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo: this.route});
  }
  isSelected(department) {
    return department.id === this.selectedId;
  }
}
