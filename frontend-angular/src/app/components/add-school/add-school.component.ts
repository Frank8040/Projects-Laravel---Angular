import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { School } from 'src/app/models/school';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {
  constructor(public schoolService: SchoolService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(schoolForm?: NgForm) {
    if (schoolForm) {
      schoolForm.reset();
    }
    this.schoolService.selectSchool = new School();
  }

  /*resetForm(schoolForm: NgForm) {
    if (schoolForm != null) {
      schoolForm.reset();
      this.schoolService.selectSchool = new School();
    }
  }*/

  submitForm(schoolForm: NgForm) {
    this.schoolService.CreateSchool(schoolForm.value).subscribe((response) => {
      this.router.navigate([""]);
    })
    this.resetForm(schoolForm);
  }
}
