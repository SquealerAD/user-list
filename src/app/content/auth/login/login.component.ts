import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../services/http.service';
import {MessageService} from '../../../services/message.service';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private fb: FormBuilder,
              private httpService: HttpService,
              private messageService: MessageService,
              private authService: AuthService) { }

  private loginForm: FormGroup;
  ngOnInit() {
      this.loginForm = this.fb.group({
        email: this.fb.control('', [Validators.email, Validators.required]),
        password: this.fb.control('', [Validators.required, Validators.minLength(6)])
      }, []);
  }

  onSubmit() {
    this.authService.authenticate(this.loginForm, 'login');
  }
}
