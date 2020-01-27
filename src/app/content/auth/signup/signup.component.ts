import {
  Component,
  OnInit
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {MessageService} from '../../../services/message.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private messageService: MessageService) { }

  public signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: this.fb.control('', [Validators.email, Validators.required]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)])
    }, []);
  }

  onSubmit() {
    this.authService.authenticate(this.signupForm, 'register');
    this.signupForm.reset();
  }
}
