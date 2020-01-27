import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, of} from "rxjs";
import {Credentials} from "../credentials.model";
import {catchError} from "rxjs/operators";
import {HttpService} from "../../../services/http.service";
import {MessageService} from "../../../services/message.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService, private messageService: MessageService, private router: Router){}
  private isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

  getAuthStatus(): Observable<boolean>{
    return  this.isAuth.asObservable();
  }

  setAuthStatus(status: boolean){
    this.isAuth.next(status);
  }

  generateErrorMessage(controlName, form){
    const error = form.get(controlName).errors;
    if(!error){return '';}
    switch (Object.keys(error)[0]) {
      case 'required': {
        return 'this field id required';
      }
      case 'minlength': {
        return `min length is ${Object.values(error)[0]['requiredLength']} current length ${Object.values(error)[0]['actualLength']}`;
      }
      case 'email': {
        return 'not a valid e-mail'
      }
      default: {
        console.log(Object.keys(error)[0]);
      }
    }
  }

  authenticate(form, typeOfAuthentication){
    const credentials: Credentials = new Credentials(form.value.email, form.value.password);
    this.httpService.signupOrLogin(credentials, typeOfAuthentication)
      .pipe(catchError((err) => {
        return of({error: err.error.error});
      }))
      .subscribe((loginResponse) => {
        if(loginResponse.error){
          this.messageService.showMessage(loginResponse.error,'error');
        } else {
          this.messageService.showMessage("You have logged in successfully", 'success');
          localStorage.setItem('token', loginResponse.token);
          setTimeout(() => {
            this.setAuthStatus(true);
            this.router.navigate(['/system/users']);
          },1000);
        }
      })
  }

  signUp(){

  }
}
