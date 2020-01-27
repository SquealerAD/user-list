import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {AddUserService} from "./services/add-user.service";
import {User} from "../user/user.model";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private addUserService: AddUserService) { }
  public addUserForm: FormGroup;
  @Output('userAdded') userAdded: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
    this.addUserForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      first_name: this.fb.control('', [Validators.required]),
      last_name: this.fb.control('', [Validators.required]),
      avatar: this.fb.control('', [Validators.required,
        Validators.pattern('^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$')])
    });
  }

  onSubmit(){
    console.log(this.addUserForm);
    const submitedUser: User = {id: this.addUserService.generateUniqueId(), ...this.addUserForm.value};
    this.addUserService.addUser(submitedUser);
    this.userAdded.emit();
  }

}
