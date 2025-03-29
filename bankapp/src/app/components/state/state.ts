import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class State {
  private _userEmail = new BehaviorSubject<string>(null);
  private _users = new BehaviorSubject<string[]>([]);
  private _token = new BehaviorSubject<string[]>([]);

  get userEmail$(): Observable<string> {
    return this._userEmail.asObservable();
  }

  set userEmail(value: string) {
    this._userEmail.next(value);
  }

  clearUserData() {
    // Restablece el email
    this._userEmail.next(null);
    
    // Restablece otros estados
    this._users.next([]);
    this._token.next([]);
    
    // Si usas localStorage para persistencia, limpia eso también
    localStorage.removeItem('userEmail');
    localStorage.removeItem('token');
  }
}
