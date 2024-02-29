import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-protrack-login',
  templateUrl: './protrack-login.component.html',
  styleUrls: ['./protrack-login.component.scss']
})
export class ProtrackLoginComponent implements OnInit{


  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  )
  {}

  ngOnInit(): void 
  {
      this.loginForm = this.fb.group({
        email : ['',[Validators.required,Validators.email]],
        password : ['',[Validators.required,Validators.minLength(6)]]
      });
  }

  login()
  {
    if(this.loginForm.valid)
    {
      this.auth.login(this.loginForm.value.email,this.loginForm.value.password)
    }
  }

  register()
  {
    this.router.navigate(['/register'])
  }
}
