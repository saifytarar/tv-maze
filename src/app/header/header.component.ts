import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login/login.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private authService:LoginService, private route:Router) {    
  }

  ngOnInit() {

  }
 eventLoggedIn(event){
  console.log("eventLoggedIn"+event);
 }
  logout(){
  //  this.isLoggedIn='false'; 
     this.authService.logout();
     this.route.navigate(['login']);   
   
  }


}
