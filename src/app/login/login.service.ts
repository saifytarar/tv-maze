
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  /* Method to authenticate if already loged or not */
  public isAuthentiated():boolean{
    const userData = sessionStorage.getItem('userData');
    if(userData && userData.length>0){
      return true;
    }else{
      return false;
    }
  }
  constructor() { }
/*
Method to call login service
*/  
  login(userData){

        const responseData={
          "name":'M. Saif',
          "token": 'dfa4353dfgg34534fgdfdg'          
        }
        
        if(userData.userName ==='admin' && userData.password ==='admin'){
          sessionStorage.setItem('userData',JSON.stringify(responseData));
          this.isLoggedIn=true;  
        }else{ 
          this.isLoggedIn=false;
        }

 }
  logout(){
    sessionStorage.removeItem('userData');
    sessionStorage.clear();
    this.isLoggedIn=false;
  }
}
