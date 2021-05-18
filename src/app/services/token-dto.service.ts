import { Injectable } from '@angular/core';

const TOKEN_KEY='AuthToken';


@Injectable({
  providedIn: 'root'
})
export class TokenDtoService {

  constructor() { }

  public getToken():string{
    return localStorage.getItem(TOKEN_KEY);
  }

  public setToken(token:string):void{
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY,token);
  }

  logOut():void{
    localStorage.clear();
  }
}
