import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protrack-register',
  templateUrl: './protrack-register.component.html',
  styleUrls: ['./protrack-register.component.scss']
})
export class ProtrackRegisterComponent implements OnInit{

  registerForm!: FormGroup;

  constructor(
    private fb : FormBuilder,
    private router : Router
  )
  {}
  ngOnInit(): void
  {
      this.registerForm = this.fb.group({
        name : ['', [Validators.required, Validators.maxLength(255),]],
        address : ['', [Validators.required,Validators.maxLength(255)]],
        email : ['', [Validators.required,Validators.email,Validators.maxLength(255)]],
        password : ['', [Validators.required,Validators.minLength(6),Validators.maxLength(255)]],
        password_confirmation : ['', [Validators.required,Validators.minLength(6),Validators.maxLength(255)]]
      });

  }

  register()
  {
    if(this.registerForm.valid &&
       this.registerForm.value.password === this.registerForm.value.password_confirmation)
    {
      console.log(this.registerForm.value);
      
    }
  }

  login()
  {
    this.router.navigate(['/login']);
  }
}
