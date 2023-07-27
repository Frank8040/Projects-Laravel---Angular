import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { School } from 'src/app/models/school';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-list-school',
  templateUrl: './list-school.component.html',
  styleUrls: ['./list-school.component.css']
})
export class ListSchoolComponent implements OnInit {

  schoolList: any = [];

  constructor(public schoolService: SchoolService, private router: Router) { }

  ngOnInit(): void {
    this.loadSchools();
  }

  loadSchools() {
    return this.schoolService.GetSchools().subscribe((data: {}) => {
      this.schoolList = data;
    })
  }

  onEdit(school: School) {
    console.log(school);
    this.schoolService.selectSchool = Object.assign({}, school);
    this.router.navigate(["/edit-school"]);
  }

  onDelete(id: number) {
    this.schoolService.DeleteSchool(id).subscribe((response) => {
      this.loadSchools();
    })
  }
}
