import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { forms, buttons, common } from 'src/app/constants';

@Component({
  selector: 'app-protrack-register',
  templateUrl: './protrack-register.component.html',
  styleUrls: ['./protrack-register.component.scss']
})
export class ProtrackRegisterComponent implements OnInit {

  registerForm!: FormGroup;
  forms = forms;
  buttons = buttons;
  common = common;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(255),]],
      address: ['', [Validators.required, Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
      c_password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
      phone: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });

  }

  register() {
    if (this.registerForm.valid &&
      this.registerForm.value.password === this.registerForm.value.c_password) {
      this.authService.register(this.registerForm.value).subscribe(res => {
        if (res.status) {
          sessionStorage.setItem('access_token', res.authorisation.token)
          this.dashboard();
        }
      });
    }
  }

  dashboard() {
    this.router.navigate(['/dashboard'])
  }
  login() {
    this.router.navigate(['/login']);
  }
}
