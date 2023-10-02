import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class UserService {
  
    constructor(private http: HttpClient) {}
  
    createUser(user:any): Observable<any>{
      return this.http.post<any>(`users/`, user)
    }
  }