import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProtrackProjectService } from 'src/app/services/protrack-project.service';
@Component({
  selector: 'app-protrack-create-project',
  templateUrl: './protrack-create-project.component.html',
  styleUrls: ['./protrack-create-project.component.scss']
})
export class ProtrackCreateProjectComponent {

  projectForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private projectService: ProtrackProjectService
  ) { }
  ngOnInit(): void {
    this.projectForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
      is_active: true,
      status: 'Initial Status'
    })

  }




  createProject() {
    console.log("clicked");

    if (this.projectForm.valid) {
      console.log(this.projectForm);

      this.projectService.createProject(this.projectForm.value).subscribe(res =>
        console.log(res)
      )
      this.resetForm()
    }
    else{
      console.log(this.projectForm.errors);

    }
  }

  resetForm() {
    this.projectForm.reset()
  }

  goToProjects() {
    this.router.navigate(['/projects'])
  }


}
