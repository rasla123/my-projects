import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      this.authService.login(username, password).subscribe((user: any[]) => {
        if (user.length > 0) {
          const role = user[0].role;
          const token = btoa(`${username}:${password}`);
          localStorage.setItem('token', token);
          localStorage.setItem('userId', user[0].id);
          this.router.navigate([role === 'admin' ? 'admin' : `user/${user[0].id}`]);
          // Display success toast
        this.toastr.success('Login successful!', 'Success');
        } else {
          // Display error toast
        this.toastr.error('Invalid credentials', 'Error');
        }
        
      });
    }
  }

}