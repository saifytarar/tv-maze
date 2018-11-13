import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  
  @Output() public loginEvent;

  public loginData={
    userName:'',
    password : ''
  };
  
  errorMsg:string;

  constructor(private router:Router, private authService:LoginService) { 
     this.errorMsg='';
  }
  
  ngOnInit() {
    
  }
  clearError(){
    console.log("tsdafsdafsdfe");
    this.errorMsg='';
  }
  login(){
    if(this.loginData.userName && this.loginData.password){
        this.errorMsg='';
        
        this.authService.login(this.loginData);

        if(this.authService.isLoggedIn){
          this.router.navigate(['shows']);
        }else{
          this.errorMsg='Wrong username/password';
        }
    }else{
        this.errorMsg='Enter a valid username/password';
    }   
  }

}
