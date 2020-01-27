import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BASE_URL} from '../shared/exports';
import {map} from 'rxjs/operators';
import {DataStorageService} from './data-storage.service';
import {Credentials} from '../content/auth/credentials.model';


@Injectable()
export class HttpService {
  constructor(private http: HttpClient,
              @Inject(BASE_URL) private url,
              private dataStorageService: DataStorageService) {}


  getUsersByPageNum(pageNum: number, perPage: number = 6): void {
    this.http.get(`${this.url}users?page=${pageNum}&per_page=${perPage}`, {
      observe: 'body',
      responseType: 'json'
    }).pipe(map((data) => {
      this.dataStorageService.setUsers(data['data']);
      return data['data'];
    })).subscribe(() => {});
  }

  signupOrLogin(credentials: Credentials, type): Observable<any> {
    return this.http.post(`${this.url}${type}`, credentials, {
      observe: 'body',
      responseType: 'json'
    });
  }

  register(credentials: Credentials): Observable<any>{
    return this.http.post(`${this.url}register`, credentials, {
      observe: 'body',
      responseType: 'json'
    });
  }

  login(credentials: Credentials): Observable<any>{
    return this.http.post(`${this.url}login`, credentials, {
      observe: 'body',
      responseType: 'json'
    });
  }
}
