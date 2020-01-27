import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
  constructor(){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let clone = req.clone();
    if (localStorage.getItem('token')){
      clone = req.clone({
        headers: new HttpHeaders().set(`Authorization`, 'Bearer ' + localStorage.getItem('token'))
      });
    }
    return next.handle(clone);
  }

}
