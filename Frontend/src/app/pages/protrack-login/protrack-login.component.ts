import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { forms,buttons,common } from 'src/app/constants';

@Component({
  selector: 'app-protrack-login',
  templateUrl: './protrack-login.component.html',
  styleUrls: ['./protrack-login.component.scss']
})
export class ProtrackLoginComponent implements OnInit{


  loginForm!: FormGroup;
  forms = forms;
  common = common;
  buttons=buttons;
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
      this.auth.login(this.loginForm.value).subscribe(res => {
        if(res.status){
          sessionStorage.setItem('authorization',res.authorization.token);
          this.dashboard();
        }
      });

    }
  }

  dashboard()
  {
    this.router.navigate(['/dashboard'])
  }
  register()
  {
    this.router.navigate(['/register'])
  }
}
