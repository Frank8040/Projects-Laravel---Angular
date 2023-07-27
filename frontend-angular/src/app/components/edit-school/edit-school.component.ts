import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { School } from 'src/app/models/school';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-edit-school',
  templateUrl: './edit-school.component.html',
  styleUrls: ['./edit-school.component.css']
})
export class EditSchoolComponent {

  constructor(public schoolService: SchoolService, private router: Router) { }

  resetForm(schoolForm?: NgForm) {
    if (schoolForm) {
      schoolForm.reset();
    }
    this.schoolService.selectSchool = new School();
  }

  submitForm(schoolForm: NgForm) {
    this.schoolService.UpdateSchool(schoolForm.value.id, schoolForm.value)
      .subscribe((response) => {
        this.router.navigate([""]);

      });
    this.resetForm(schoolForm);
  }
}
